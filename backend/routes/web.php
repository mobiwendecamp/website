<?php

use App\Filament\Actions\Register;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Welcome to Mobi Wende Camp Backend';
});

Route::get('/admin/register', Register::class)
    ->middleware(['signed'])
    ->name('filament-panels::register');
