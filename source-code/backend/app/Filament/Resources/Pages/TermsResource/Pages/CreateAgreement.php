<?php

namespace App\Filament\Resources\Pages\TermsResource\Pages;

use App\Filament\Resources\Pages\TermsResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAgreement extends CreateRecord
{
    protected static string $resource = TermsResource::class;
    protected static ?string $title = 'Правила пользования Сайтом БИКИНИ СТАР';
}
