<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RootPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('RootPage', [
            'number_of_questions' => Question::count(),
        ]);
    }

}
