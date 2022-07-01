<?php

namespace App\Repositorties;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductColor;
use App\Models\ProductImage;
use App\Utils\ImageUpload;
use Yajra\DataTables\Facades\DataTables;

class ProductRepository implements RepositoryInterface
{
    public $product;
    public function __construct(Product $product)
    {

        $this->product = $product;
    }

    public function baseQuery($relations=[],$withCount=[] , $where=[])
    {
        $query = $this->product->select('*')->with($relations);
        foreach ($withCount as $key => $value) {
           $query->withCount($value);
        }
        foreach ($where as $key => $value) {
            $query->where($key, $value);
        }
       return $query;
    }

    public function getbyId($id)
    {
        return $this->product->where('id', $id)->firstOrFail();
    }


    public function store($params)
    {
        $product =  $this->product->create($params);
        
        $images = $this->uploadMultipleImages($params , $product);
        $product->images()->createMany($images);
         return $product;
        
    }


    private function uploadMultipleImages($params , $product)
    {
        $images = [] ;
        if (isset($params['images'])) {
            $i = 0;
            foreach ($params['images'] as $key => $value) {
                $images[$i]['image'] = ImageUpload::uploadImage($value);
                $images[$i]['product_id '] =$product->id;
                $i++;
            }
         }

         return $images;
    }

    public function addColor($product, $params)
    {
        $product->productColor()->createMany($params['colors']);
    }



    public function update($id, $params)
    {

        $product = $this->getbyId($id);
        $product =($product->update($params));
        $product = $this->getbyId($id);
        $images = $this->uploadMultipleImages($params , $product);
        $product->images()->createMany($images);
        return $product;
    }

    public function delete($params)
    {
        $product = $this->getbyId($params['id']);
        return $product->delete();
    }
        
}
