<?php

namespace App\Services;

use App\Repositorties\ProductRepository;
use App\Utils\ImageUpload;
use Yajra\DataTables\Facades\DataTables;

class ProductService
{
    public $productRepository;
    public function __construct(ProductRepository $repo)
    {
        $this->productRepository = $repo;
    }

    public function getAll()
    {
        return $this->productRepository->baseQuery();
    }

    public function getById($id)
    {
        return $this->productRepository->getById($id);
    }

    public function store($params)
    {   
        if (isset($params['image'])) {
            $params['image'] = ImageUpload::uploadImage($params['image']);
        }

        $product = $this->productRepository->store($params);

        if (isset($params['colors'])) {
            $params['colors'] = array_map(function($color) use ($product) {
                $colors['color'] = $color;
                $colors['product_id'] = $product->id;
                return $colors;
            }, $params['colors']);

            $this->productRepository->addColor($product, ['colors' => $params['colors']]);
        }

        return $product;
    }

    public function update($id, $params)
    {
        return $this->productRepository->update($id, $params);
    }

    public function delete($params)
    {
        $this->productRepository->delete($params);
    }

    public function datatable()
    {
        $query = $this->productRepository->baseQuery(relations:['category'],withCount:['productColor']);
        return DataTables::of($query)
            ->addColumn('action', function ($row) {
                return $btn = '
                <a href="' . Route('dashboard.products.edit', $row->id) . '"  class="edit btn btn-success btn-sm" ><i class="fa fa-edit"></i></a>

                <button type="button" id="deleteBtn"  data-id="' . $row->id . '" class="btn btn-danger mt-md-0 mt-2" data-bs-toggle="modal"
                data-original-title="test" data-bs-target="#deletemodal"><i class="fa fa-trash"></i></button>';
            })

            ->addColumn('category', function ($row) {
                return $row->category->name;
            })


            ->rawColumns(['action'])
            ->make(true);
        }
    
}
