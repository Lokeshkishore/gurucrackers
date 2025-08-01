<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;

class HomeController extends Controller
{
    public function index() {
      return view('welcome'); // Blade view
    }

    public function admin() {
    return view('admin'); // Blade view
    }
    public function addNewProduct(Request $request) {
        $file = $request->file('image');
        $path = $file->store('uploads', 'public');
        $product = Product::create([
            'name'=>$request->name,
            'price'=>$request->price,
            'quantity'=>$request->quantity,
            'offer_percent'=>$request->discount,
            'image'=>$path,
        ]);
        $products =  Product::select('id','name','price','image','quantity')->get();
        return response()->json([
            'message' => 'Product created successfully',
            'data' => $products,  // optional: return the created product data
        ], 201);
    }

     public function getProducts() {
      $products =  Product::select('id','name','price','image','quantity','offer_percent')->get();
        return response()->json([
            'data' => $products,  // optional: return the created product data
        ], 201);
    }

    public function orderPage() {
        return view('order'); // Blade view
    }

     public function addOrder(Request $request) {
        $order = Order::create([
            'form_json'=>$request->form,
            'orders_json'=>$request->cartlist,
            'total_amount'=>$request->total_price,
        ]);
        return response()->json([
            'success'=>true,
            'message' => 'Orderes successfully',
        ], 201);
    }
}
