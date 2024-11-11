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
        $localFiles = Storage::disk('frontend')->allFiles('src/content');

        foreach ($localFiles as $file) {
            $this->info('copy  ' . $file);

            if (str_ends_with($file, '.gitignore')) {
                continue;
            }

            Storage::disk('nextcloud')
                ->put(
                    'Collectives/noIAA Website/content/'.Str::of($file)->replaceFirst('src/content/pages', ''),
                    Storage::disk('frontend')->get($file)
                );

            $this->line('copied  ' . $file);

        }
    }
}
