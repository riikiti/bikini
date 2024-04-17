<?php

namespace App\Filament\Resources\Pages\PolicyResource\Pages;

use App\Filament\Resources\Pages\TermsResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAgreement extends CreateRecord
{
    protected static string $resource = TermsResource::class;
}
