<?php

use App\Http\Controllers\Dashboard\IndexController;
use App\Http\Controllers\Dashboard\SettingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/index',[IndexController::class , 'index'])->name('admin');
Route::put('settings/{setting}/update',[SettingController::class , 'update'])->name('dashboard.settings.update');
Route::get('settings',[SettingController::class , 'index'])->name('dashboard.settings.index');