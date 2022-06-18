<?php

namespace App\Repositorties;

use App\Models\Category;
use App\Models\Product;
use Yajra\DataTables\Facades\DataTables;

class ProductRepository implements RepositoryInterface
{
    public $product;
    public function __construct(Product $product)
    {

        $this->product = $product;
    }

    public function baseQuery($relations=[])
    {
        $query = $this->product->select('*')->with($relations);
        return $query;
    }

    public function getbyId($id)
    {
        return $this->product->where('id', $id)->firstOrFail();
    }


    public function store($params)
    {
        return $this->product->create($params);
    }



    public function update($id, $params)
    {
        $product = $this->getbyId($id);
        return $product->update($params);
    }

    public function delete($params)
    {
        $product = $this->getbyId($params['id']);
        return $product->delete();
    }
        
}
