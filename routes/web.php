<?php
use App\Events\message;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/fire', function () {
    $messages = ['funny', 'exciting', 'interesting', 'amazing', 'inspiring'];
    $randomMessage = $messages[array_rand($messages)];
    event(new Message($randomMessage)); 
    dd('event fired');
});
