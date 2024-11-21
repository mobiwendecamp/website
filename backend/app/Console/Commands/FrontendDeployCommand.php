<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
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
            ->map(function ($file) use ($storage) {
                return $file.":".$storage->lastModified($file);
            })
            ->join(',');

        $hash = md5($allFilesString);

        if ($hash === Cache::get('frontend.change_hash')) {
            $this->info('Nothing Changed. No deploy necessary.');
            return;
        }


        Cache::forever('frontend.change_hash', $hash);
        $this->info('Something Changed. Deploy starting...');
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
