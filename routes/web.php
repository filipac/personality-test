<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', \App\Http\Controllers\Pages\RootPageController::class);
Route::get('/quiz', \App\Http\Controllers\Pages\QuizPageController::class);
Route::get('/results', function() {
    return redirect()->to('/quiz');
});
Route::post('results', \App\Http\Controllers\Pages\ResultsPageController::class);

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

//require __DIR__.'/auth.php';
