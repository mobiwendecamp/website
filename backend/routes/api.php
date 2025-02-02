<?php

use App\Models\NewsletterMail;
use Illuminate\Support\Facades\Route;

Route::get('/website/content/current', function () {
    $path = \Illuminate\Support\Facades\Cache::get('frontend.current_content');

    return response()->download(\Illuminate\Support\Facades\Storage::path($path.'.zip'));
});

Route::post('/website/newsletter', function (\Illuminate\Http\Request $request) {
    $data = $request->validate([
        'email' => [
            'required',
            'email',
            'max:255',
            \Illuminate\Validation\Rule::unique('newsletter_mails', 'email')
        ]
    ]);

    NewsletterMail::create(['email' => $data['email']]);

    return \Illuminate\Support\Facades\Response::make();
});
