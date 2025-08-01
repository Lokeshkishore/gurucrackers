<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
      // Optional: Specify the table if it's not "products"
    protected $table = 'products';

    // Mass assignable attributes
    protected $fillable = [
        'name',
        'price',
        'quantity',
        'image',
        'offer_percent'
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return asset('storage/' . $this->image);
    }
}
