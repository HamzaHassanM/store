<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Categories\CategoryDelete;
use App\Http\Requests\Dashboard\Categories\CategoryDeleteRequest;
use App\Http\Requests\Dashboard\Categories\CategoryStoreRequest;
use App\Http\Requests\Dashboard\Categories\CategoryUpdateRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use DataTables;
class CategoryController extends Controller
{

    private $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }
    public function index()
    {
        $mainCategories = $this->categoryService->getMainCategories();
        return view('dashboard.categories.index' , compact('mainCategories'));
    }


    public function getall()
    {
       return $this->categoryService->datatable();
    }

   
    public function store(CategoryStoreRequest $request)
    {
        $this->categoryService->store($request->validated());
        return redirect()->route('dashboard.categories.index')->with('success', 'تمت الاضافة بنجاح');
    }

   
    
    public function edit($id)
    {
        $category = $this->categoryService->getById($id,true);
        $mainCategories = $this->categoryService->getMainCategories();
        return view('dashboard.categories.edit' , compact('category','mainCategories'));
    }

   
    public function update( $id ,CategoryUpdateRequest $request)
    {
        $this->categoryService->update($id,$request->validated());
        return redirect()->route('dashboard.categories.edit' , $id)->with('success', 'تمت الاضافة بنجاح');
    }

    


    public function delete(CategoryDeleteRequest $request)
    {
        $this->categoryService->delete($request->validated());
        return redirect()->route('dashboard.categories.index');
    }
}
