<?php

namespace App\Filament\Resources\NewsletterMailResource\Pages;

use App\Filament\Resources\NewsletterMailResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNewsletterMails extends ListRecords
{
    protected static string $resource = NewsletterMailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
