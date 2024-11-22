<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class FrontendDeployCommand extends Command
{
    protected $signature = 'frontend:deploy';

    protected $description = 'Command description';

    public function handle(): void
    {
        $storage = Storage::disk('nextcloud');

        $files = [
            ...$storage->allFiles($this->getPagesPath()),
            ...$storage->allFiles($this->getAssetsPath()),
        ];

        $allFilesString = collect($files)
            ->map(fn (string $file) => $file.':'.$storage->lastModified($file))
            ->join(',');

        $hash = md5($allFilesString);

        if ($hash === Cache::get('frontend.change_hash')) {
            $this->info('Nothing Changed. No deploy necessary.');

            return;
        }

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
            ]);

        if ($response->status() !== 200) {
            $this->error('Deployment failed.');

            return;
        }

        Cache::forever('frontend.change_hash', $hash);
        $this->info('Deployment started on vercel id: '.$response->json('id'));
    }

    public function getPagesPath()
    {
        return config('frontend.content.remote_base_path').config('frontend.content.remote_pages_path');
    }

    public function getAssetsPath()
    {
        return config('frontend.content.remote_base_path').config('frontend.content.remote_assets_path');
    }
}
