<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Products\StoreProductRequest;
use App\Repositorties\CategoryRepository;
use App\Repositorties\ProductRepository;
use App\Services\CategoryService;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public CategoryService $categoryService;
    public ProductService $productService;

    public function __construct(CategoryService $categoryService, ProductService $productService)
    {
        $this->categoryService = $categoryService;
        $this->productService = $productService;
    }

    public function index()
    {
        return view('dashboard.products.index');
    }

    public function getall(Request $request)
    {
       return $this->productService->datatable();
    }

    
    public function create()
    {
        $categories = $this->categoryService->getAll();
        return view('dashboard.products.create' , compact('categories'));
    }

   
    public function store(StoreProductRequest $request)
    {
        $product = $this->productService->store($request->validated());
        return redirect()->route('dashboard.products.index');
    }

   
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        //
    }

   
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
