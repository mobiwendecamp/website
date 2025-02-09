<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Flysystem\FileAttributes;
use League\Flysystem\StorageAttributes;
use Yosymfony\Toml\Toml;
use ZanySoft\Zip\Zip;

class FrontendDeployCommand extends Command
{
    protected $signature = 'frontend:deploy';

    protected $description = 'Command description';


    public function handle(): void
    {
        $storage = Storage::disk('nextcloud');
        $this->info('Fetching all files:');
        Storage::createDirectory('website_content');
        $websiteContentPrefix = 'website_content/'.now()->format('y-m-d-H-i');
        $files = [
            ...$this->allFiles($storage, $this->getPagesPath()),
            ...$this->allFiles($storage, $this->getAssetsPath()),
            ...$this->allFiles($storage, $this->getDataPath()),
        ];

        $this->info('Checking Copy Files over:');


        $allFilesString = [];
        $zip = new \ZipArchive();
        $zip->open(
            Storage::path("{$websiteContentPrefix}.zip"),
            \ZipArchive::CREATE | \ZipArchive::OVERWRITE
        );

        $this->withProgressBar(
            $files,
            function (FileAttributes $file) use (&$zip, &$allFilesString, $websiteContentPrefix, $storage) {
                $path = Str::replace(
                    'Collectives/noIAA Website',
                    '',
                    $file->path()
                );
                $allFilesString[] = $file->path().':'.$file->lastModified();
                if (Str::endsWith($file->path(), '/translations/de.md')
                    || Str::endsWith(
                        $file->path(),
                        '/translations/en.md'
                    )) {
                    return;
                }

                $zip->addFromString($path, $storage->get($file->path()));
            }
        );

        $zip->addFromString('/translations/de.json', $this->getTranslations($storage, 'de'));
        $zip->addFromString('/translations/en.json', $this->getTranslations($storage, 'en'));
        $zip->close();
        $allFilesString = implode(',', $allFilesString);


        $this->info('Something Changed!');


        $hash = md5($allFilesString);
        if ($hash === Cache::get('frontend.change_hash')) {
            $this->info('Nothing Changed. No deploy necessary.');
            $this->info('Cleaning up.');
            Storage::delete($websiteContentPrefix.'.zip');
            return;
        }

        Cache::forever('frontend.current_content', $websiteContentPrefix);

        $this->info('Something Changed. Deploy starting...');

        $http = Http::withHeaders([
            'Authorization' => 'Bearer '.config('frontend.vercel.token'),
        ])
            ->withQueryParameters([
                'pojectId' => config('frontend.vercel.project_id'),
            ])
            ->throw();

        $response = $http
            ->get('https://api.vercel.com/v6/deployments');

        $deployment = $response->json('deployments')[0];

        $response = $http
            ->post('https://api.vercel.com/v13/deployments', [
                'name' => config('frontend.vercel.project_name'),
                'deploymentId' => $deployment['uid'],
                'target' => 'production'
            ]);

        if ($response->status() !== 200) {
            $this->error('Deployment failed.');

            return;
        }

        Cache::forever('frontend.change_hash', $hash);
        $this->info('Deployment started on vercel id: '.$response->json('id'));
    }

    public function allFiles(Filesystem $storage, string $directory): array
    {
        return $storage->getDriver()->listContents($directory ?? '', true)
            ->filter(function (StorageAttributes $attributes) {
                return $attributes->isFile() && !Str::endsWith($attributes->path(), 'Readme.md');
            })
            ->sortByPath()
            ->toArray();
    }

    public function getPagesPath()
    {
        return config('frontend.content.remote_base_path').config('frontend.content.remote_pages_path');
    }

    public function getAssetsPath()
    {
        return config('frontend.content.remote_base_path').config('frontend.content.remote_assets_path');
    }

    public function getDataPath()
    {
        return config('frontend.content.remote_base_path').config('frontend.content.remote_data_path');
    }

    public function getTranslations(Filesystem $storage, string $lang)
    {
        $translations = Str::of($storage->get($this->getDataPath().'/translations/'.$lang.'.md'))
            ->replaceStart('```toml', '')
            ->replaceEnd('```', '');
        $translations = Toml::Parse($translations);

        return json_encode($translations, JSON_PRETTY_PRINT);
    }
}
