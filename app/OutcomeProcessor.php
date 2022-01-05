<?php

namespace App;

use App\Models\Answer;

class OutcomeProcessor
{
    public function __construct(private array $results)
    {
    }

    public function decide(): Outcome
    {
        $introvert = 0;
        $extrovert = 0;

        $answers = Answer::query()->whereIn('id', array_values($this->results))->get();
        foreach ($answers as $answer) {
            if ($answer->outcome === Outcome::Extrovert) {
                $extrovert++;
            } else {
                $introvert++;
            }
        }

        if ($introvert > $extrovert) {
            return Outcome::Introvert;
        } else if($introvert === $extrovert) {
            return Answer::find($this->results[count($this->results) - 1])->outcome;
        }

        return Outcome::Extrovert;
    }

}
