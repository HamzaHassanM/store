@extends('dashboard.layout.layout')

@section('body')
    <div class="page-body">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="page-header-left">
                            <h3>إعدادت الموقع
                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ol class="breadcrumb pull-right">
                            <li class="breadcrumb-item">
                                <a href="index.html">
                                    <i data-feather="home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item">لوحة التحكم</li>
                            <li class="breadcrumb-item active">إعدادات الموقع</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->

        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row product-adding">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>الاعدادات</h5>
                        </div>
                        <div class="card-body">
                            <div class="digital-add needs-validation">
                                <form action="{{ route('dashboard.settings.update', $setting->id) }}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    @method('put')

                                    @if($errors->any())
                                    {!! implode('', $errors->all('<div>:message</div>')) !!}
                                @endif

                                <div class="form-group">
                                    <label for="validationCustom05" class="col-form-label pt-0">
                                        لوجو الموقع</label>
                                    <input class="form-control dropify" id="validationCustom05" type="file" name="logo"  data-default-file="{{asset($setting->logo)}}">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label ">الصورة المصغرة</label>
                                    <input class="form-control dropify" id="validationCustom05" type="file" name="favicon"  data-default-file="{{asset($setting->favicon)}}">
                                </div>


                                <div class="form-group">
                                    <label for="validationCustom01" class="col-form-label pt-0"><span>*</span>
                                        اسم الموقع</label>
                                    <input class="form-control" id="validationCustom01" type="text" name="name" value="{{$setting->name}}">
                                </div>


                                <div class="form-group">
                                    <label class="col-form-label">وصف الموقع</label>
                                    <textarea rows="5" cols="12" name="description">{{$setting->twitter}}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="validationCustom02" class="col-form-label"><span>*</span>
                                        البريد الإلكتروني </label>
                                    <input class="form-control" id="validationCustom02" type="text" name="email" value="{{$setting->email}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">رقم الهاتف</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="phone" value="{{$setting->phone}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">العنوان</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="address" value="{{$setting->address}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">رابط الفيس بوك</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="facebook" value="{{$setting->facebook}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">رابط تويتر</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="twitter" value="{{$setting->twitter}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">حساب الانستجرام</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="instagram" value="{{$setting->instagram}}">
                                </div>

                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0"> اليوتيوب</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="youtube" value="{{$setting->youtube}}">
                                </div>


                                <div class="form-group">
                                    <label for="validationCustomtitle" class="col-form-label pt-0">التيك توك</label>
                                    <input class="form-control" id="validationCustomtitle" type="text" name="tiktok" value="{{$setting->tiktok}}">
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit">حفظ</button>
                                </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
@endsection
