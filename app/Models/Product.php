<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [ 'name', 'description', 'image', 'price', 'discount_price', 'category_id' ,'color' , 'size'];
    protected $table = 'products';


    public  function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function images(){
        return $this->hasMany(ProductImage::class, 'product_id');
    }
}
