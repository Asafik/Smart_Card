<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
//Page
Route::get('/', function () { return view('Pages/home');});
Route::get('/product', function () { return view('Pages/product/product');});
Route::get('/detailproduct', function () { return view('Pages//product/detailproduct');});
Route::get('/tentangkami', function () { return view('Pages/tentangkami');});
Route::get('/cekstatus', function () { return view('Pages/cekstatus');});
Route::get('/pemesanan', function () { return view('Pages/Pesan/pesan');});
Route::get('/pembayaran', function () { return view('Pages/Pesan/pembayaran');});
//Page

//auth
Route::get('/login', function () { return view('auth/login');});
Route::get('/register', function () { return view('auth/register');});
