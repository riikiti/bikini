<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:users,email',
            'password'=>'required',
            'confirm_password'=>'required|same:password',
            'name'=>'required'
        ];
    }

    public function messages(): array
    {
        return [
            '*.required' => 'error',
            'email.unique' => 'Данная почта уже зарешестрирована на сайте',
        ];
    }
}
