<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// routes/web.php
Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/admin', [App\Http\Controllers\HomeController::class, 'admin']);
Route::post('/crackers/add-product', [App\Http\Controllers\HomeController::class, 'addNewProduct']);
Route::get('/crackers/products', [App\Http\Controllers\HomeController::class, 'getProducts']);
Route::get('/order', [App\Http\Controllers\HomeController::class, 'orderPage']);
Route::post('/crackers/add-order', [App\Http\Controllers\HomeController::class, 'addOrder']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
