<?php

namespace App\Http\Requests;

use App\Enum\BreastEnum;
use App\Enum\HairColorEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class FillModelInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'birthdate' => 'integer',
            'height' => 'integer',
            'weight' => 'integer',
            'hair_color' => 'exists:hair_colors,id',
            'breast' => 'exists:breasts,id',
            'size' => 'integer',
            'waist' => 'integer',
            'hips' => 'integer',
            'country_id' => 'integer|exists:countries,id',
            'city' => 'string',
            'avatar' => 'nullable',
            'about' => 'string',
            'from_subscribers' => 'boolean',
            'from_all_models' => 'boolean',
            'from_all_fans' => 'boolean',
            'from_all_users' => 'boolean',
            'from_no_one' => 'boolean',

        ];
    }
}
