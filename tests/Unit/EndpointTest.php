<?php

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('results are returned by the controller', function() {
    app(\Database\Seeders\DatabaseSeeder::class)->run();

    $results = [];

    // 3 introvert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Introvert)->inRandomOrder()->limit(3)->get(['id'])->pluck('id')->toArray()
    );

    // 2 extrovert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Extrovert)->inRandomOrder()->limit(2)->get(['id'])->pluck('id')->toArray()
    );

    $desired = \App\Outcome::Introvert->value;

    $response = $this->post(url()->action(\App\Http\Controllers\Pages\ResultsPageController::class), ['results' => $results]);
    $page = $response->assertInertia()->inertiaPage();

    expect($page['props']['result'])->toEqual($desired);
});

test('visiting the results page without post method returns a redirect to quiz', function() {
    $response = $this->get(url()->action(\App\Http\Controllers\Pages\ResultsPageController::class));

    expect($response->baseResponse)
        ->toBeInstanceOf(\Illuminate\Http\RedirectResponse::class);

    expect($response->baseResponse->getTargetUrl())->toEqual(url()->action(\App\Http\Controllers\Pages\QuizPageController::class));
});
