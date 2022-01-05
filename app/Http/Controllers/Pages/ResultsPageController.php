<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Outcome;
use App\OutcomeProcessor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResultsPageController extends Controller
{
    public function __invoke()
    {
        $results = request()->get('results');

        $outcome = app(OutcomeProcessor::class, ['results' => $results])->decide();

        return Inertia::render('ResultsPage', [
            'result' => $outcome->value,
        ]);
    }

}
