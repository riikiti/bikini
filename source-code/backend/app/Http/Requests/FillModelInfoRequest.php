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
            'birthdate' => 'nullable|integer',
            'height' => 'nullable|integer',
            'weight' => 'nullable|integer',
            'hair_color' => 'nullable|exists:hair_colors,id',
            'breast' => 'nullable|exists:breasts,id',
            'size' => 'nullable|integer',
            'waist' => 'nullable|integer',
            'hips' => 'nullable|integer',
            'country_id' => 'nullable|integer|exists:countries,id',
            'city' => 'nullable|string',
            'avatar' => 'nullable',
            'about' => 'nullable|string',
            'messages_status.from_subscribers' => 'nullable|boolean',
            'messages_status.from_all_models' => 'nullable|boolean',
            'messages_status.from_all_fans' => 'nullable|boolean',
            'messages_status.from_all_users' => 'nullable|boolean',
            'messages_status.from_no_one' => 'nullable|boolean',
            'new_password' => 'nullable|string',
            'new_password_confirmed' => 'nullable|string'
        ];
    }
}
