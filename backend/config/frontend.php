<?php

return [
    'content' => [
        'remote_base_path' => 'Collectives/noIAA Website/',
        'remote_pages_path' => 'content',
        'remote_assets_path' => 'assets',
    ],
    'vercel' => [
        'token' => env('VERCEL_TOKEN'),
        'project_id' => env('VERCEL_PROJECT_ID'),
        'project_name' => env('VERCEL_PROJECT_NAME'),
    ],

];
