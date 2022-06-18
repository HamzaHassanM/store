<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SettingUpdateRequest;
use App\Models\Setting;
use App\Utils\ImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;

class SettingController extends Controller
{
    public function index()
    {
        return view('dashboard.settings.index');
    }


    public function update(SettingUpdateRequest $request, Setting $setting)
    {
        $setting->update($request->validated());
        if($request->has('logo')){
            $logo = ImageUpload::uploadImage($request->logo , null , null , 'logo/');
            $setting->update(['logo' => $logo]);
        }
        if($request->has('favicon')){
            $favicon = ImageUpload::uploadImage($request->favicon , 32 , 32 , 'logo/');
            $setting->update(['favicon' => $favicon]);
        }
        return redirect()->route('dashboard.settings.index')->with('success', 'تم تحديث الاعدادات بنجاح');
    }
}
