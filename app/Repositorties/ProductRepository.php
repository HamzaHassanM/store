<?php

namespace App\Repositorties;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductColor;
use Yajra\DataTables\Facades\DataTables;

class ProductRepository implements RepositoryInterface
{
    public $product;
    public function __construct(Product $product)
    {

        $this->product = $product;
    }

    public function baseQuery($relations=[],$withCount=[])
    {
        $query = $this->product->select('*')->with($relations);
        foreach ($withCount as $key => $value) {
           $query->withCount($value);
        }
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

    public function addColor($product, $params)
    {
        $product->productColor()->createMany($params['colors']);
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
