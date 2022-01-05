<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('QuizPage', [
            'questions' => Question::query()->with('answers')->get(),
        ]);
    }

}
