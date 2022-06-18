<?php

namespace App\Services;

use App\Repositorties\ProductRepository;
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
        return $this->productRepository->store($params);
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
        $query = $this->productRepository->baseQuery();
        return DataTables::of($query)
            ->addColumn('action', function ($row) {
                return '<a href="javascript:void(0)" class="btn btn-primary btn-sm edit-product" data-id="' . $row->id . '">Edit</a>
                        <a href="javascript:void(0)" class="btn btn-danger btn-sm delete-product" data-id="' . $row->id . '">Delete</a>';
            })
            ->rawColumns(['action'])
            ->make(true);
        }
    
}
