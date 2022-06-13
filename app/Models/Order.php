<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [ 'id', 'user_id', 'status', 'payment_method', 'payment_status', 'payment_id', 'total_price', 'adress', 'phone', 'email', 'name', 'surname', 'city', 'postal_code', 'country', 'shipping_price', 'created_at', 'updated_at'];
    protected $table = 'orders';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    

}
