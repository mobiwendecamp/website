<?php

namespace App\Filament\Resources\NewsletterMailResource\Pages;

use App\Filament\Resources\NewsletterMailResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditNewsletterMail extends EditRecord
{
    protected static string $resource = NewsletterMailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
