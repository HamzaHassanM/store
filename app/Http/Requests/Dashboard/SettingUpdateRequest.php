<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class SettingUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=>'string|nullable',
            'description'=>'string|nullable',
            'email'=>'email|nullable',
            'phone'=>'string|nullable',
            'address'=>'string|nullable',
            'logo'=>'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'favicon'=>'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'facebook'=>'string|nullable',
            'twitter'=>'string|nullable',
            'instagram'=>'string|nullable',
            'youtube'=>'string|nullable',
            'tiktok'=>'string|nullable',
        ];
    }
}
