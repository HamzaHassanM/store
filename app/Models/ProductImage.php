<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'product_id', 'image'];
    protected $table = 'product_images';
    public $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class , 'product_id' , 'id');
    }
}
