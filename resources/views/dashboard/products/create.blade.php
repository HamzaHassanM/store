@extends('dashboard.layout.layout')

@section('body')
    <div class="page-body">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="page-header-left">
                            <h3> المنتجات
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
                            <li class="breadcrumb-item">Digital</li>
                            <li class="breadcrumb-item active">Sub Category</li>
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
                            <h5>اضافة منتج</h5>
                        </div>
                        <div class="card-body">
                            <div class="digital-add needs-validation">
                                <form action="{{ route('dashboard.products.store') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf

                                    <div class="col-12">

                                        @if ($errors->any())
                                            {!! implode('', $errors->all('<div>:message</div>')) !!}
                                        @endif

                                        <div class="form-group">
                                            <label for="validationCustomtitle" class="col-form-label pt-0">القسم</label>
                                            <select name="category_id" id="" class="form-control" required>
                                                <option value="">اختر القسم</option>
                                                @foreach ($categories as $category)
                                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                    @foreach ($category->child as $child)
                                                        <option value="{{ $child->id }}">
                                                            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;{{ $child->name }}</option>
                                                    @endforeach
                                                @endforeach
                                            </select>
                                        </div>


                                        <div class="form-group">
                                            <label for="validationCustom05" class="col-form-label pt-0">
                                                الصورة الرئيسية للمنتج</label>
                                            <input class="form-control dropify" id="validationCustom05" type="file"
                                                name="image">
                                        </div>


                                        <div class="form-group">
                                            <label for="validationCustom01" class="col-form-label pt-0">
                                                اسم المنتج</label>
                                            <input class="form-control" id="validationCustom01" type="text"
                                                name="name" required>
                                        </div>


                                        <div class="form-group">
                                            <label class="col-form-label">وصف المنتج</label>
                                            <textarea rows="5" cols="12" name="description">{{ $setting->twitter }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="validationCustom02" class="col-form-label">
                                                السعر الأساسي للمنتج </label>
                                            <input class="form-control" id="validationCustom02" type="text"
                                                name="price">
                                        </div>

                                        <div class="form-group">
                                            <label for="validationCustom02" class="col-form-label">
                                                التخفيض الأساسي للمنتج </label>
                                            <input class="form-control" id="validationCustom02" type="text"
                                                name="discount_price">
                                        </div>

                                        <div class="form-group">
                                            <label for="validationCustom02" class="col-form-label" >
                                                الألوان المتاحة للمنتج </label>
                                            <select class="form-control colors" multiple="multiple" name="colors[]">
                                            </select>
                                        </div>


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
    </div>
@endsection


@push('javascripts')
    <script>
        $(".colors").select2({
            tags: true
        });
    </script>
@endpush
