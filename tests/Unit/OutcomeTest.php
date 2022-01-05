<?php

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

beforeEach(function() {
    app(\Database\Seeders\DatabaseSeeder::class)->run();
});

test('outcome can be introvert', function() {
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

    $resolver = new \App\OutcomeProcessor($results);

    expect($resolver->decide()->value)->toBe(\App\Outcome::Introvert->value);
});

test('outcome can be extrovert', function() {
    $results = [];

    // 2 introvert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Introvert)->inRandomOrder()->limit(2)->get(['id'])->pluck('id')->toArray()
    );

    // 3 extrovert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Extrovert)->inRandomOrder()->limit(3)->get(['id'])->pluck('id')->toArray()
    );

    $resolver = new \App\OutcomeProcessor($results);

    expect($resolver->decide()->value)->toBe(\App\Outcome::Extrovert->value);
});

test('ties are set to last response result', function() {
    $results = [];

    // 3 extrovert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Extrovert)->inRandomOrder()->limit(3)->get(['id'])->pluck('id')->toArray()
    );

    // 3 introvert outcomes
    $results = array_merge(
        $results,
        \App\Models\Answer::whereOutcome(\App\Outcome::Introvert)->inRandomOrder()->limit(3)->get(['id'])->pluck('id')->toArray()
    );

    $resolver = new \App\OutcomeProcessor($results);

    expect($resolver->decide()->value)->toBe(\App\Models\Answer::find($results[count($results) - 1])->outcome->value);
});
