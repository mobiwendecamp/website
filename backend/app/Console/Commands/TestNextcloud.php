<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TestNextcloud extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-nextcloud';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Uploading Pages');

        $localFiles = Storage::disk('frontend')->allFiles('src/content/pages');

        foreach ($localFiles as $file) {
            $this->info('copy  '.$file);

            if (str_ends_with($file, '.gitignore')) {
                continue;
            }

            Storage::disk('nextcloud')
                ->put(
                    'Collectives/noIAA Website/content/'.Str::of($file)->replaceFirst('src/content/pages', ''),
                    Storage::disk('frontend')->get($file)
                );

            $this->line('copied  '.$file);

        }

        $this->info('Uploading Assets');

        $localFiles = Storage::disk('frontend')->allFiles('src/content/assets');

        foreach ($localFiles as $file) {
            $this->info('copy  '.$file);

            if (str_ends_with($file, '.gitignore')) {
                continue;
            }

            Storage::disk('nextcloud')
                ->put(
                    'Collectives/noIAA Website/assets/'.Str::of($file)->replaceFirst('src/content/assets', ''),
                    Storage::disk('frontend')->get($file)
                );

            $this->line('copied  '.$file);

        }
    }
}
