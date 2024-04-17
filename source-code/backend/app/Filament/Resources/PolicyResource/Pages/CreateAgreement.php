<?php

namespace App\Filament\Resources\PolicyResource\Pages;

use App\Filament\Resources\TermsResource\TermsResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAgreement extends CreateRecord
{
    protected static string $resource = TermsResource::class;
}
