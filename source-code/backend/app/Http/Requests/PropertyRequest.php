<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'role' => 'required' //todo сделать проверку на сузествующие параметры в user (model и user)
        ];
    }
}
