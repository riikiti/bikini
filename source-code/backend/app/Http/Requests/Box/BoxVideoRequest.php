<?php

namespace App\Http\Requests\Box;

use Illuminate\Foundation\Http\FormRequest;

class BoxVideoRequest extends FormRequest
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
            'box_id'=>'required',
            'video'=>'required',
            'description'=>'string'
        ];
    }
}
