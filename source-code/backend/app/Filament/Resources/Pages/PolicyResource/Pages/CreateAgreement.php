<?php

namespace App\Filament\Resources\Pages\PolicyResource\Pages;

use App\Filament\Resources\Pages\PolicyResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAgreement extends CreateRecord
{
    protected static string $resource = PolicyResource::class;
    protected static ?string $title = 'Политика в отношении обработки персональных данных';
}
