<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use App\Outcome;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Collection $questions)
    {
        $answers = [
            [
                'answer'     => 'Don’t dare to interrupt them',
                'identifier' => 1,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Think it’s more important to give them some of your time; work can wait',
                'identifier' => 1,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Listen, but with only with half an ear',
                'identifier' => 1,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Interrupt and explain that you are really busy at the moment',
                'identifier' => 1,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Look at your watch every two minutes',
                'identifier' => 2,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Bubble with inner anger, but keep quiet',
                'identifier' => 2,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Explain to other equally impatient people in the room that the doctor is always running late',
                'identifier' => 2,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Complain in a loud voice, while tapping your foot impatiently',
                'identifier' => 2,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Don’t dare contradict them',
                'identifier' => 3,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Think that they are obviously right',
                'identifier' => 3,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Defend your own point of view, tooth and nail',
                'identifier' => 3,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Continuously interrupt your colleague',
                'identifier' => 3,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Are a bit too far towards the back so don’t really hear what the guide is saying',
                'identifier' => 4,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Follow the group without question',
                'identifier' => 4,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Make sure that everyone is able to hear properly',
                'identifier' => 4,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Are right up the front, adding your own comments in a loud voice',
                'identifier' => 4,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Ask you to tell a story in front of everyone else',
                'identifier' => 5,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Talk privately between themselves',
                'identifier' => 5,
                'outcome'    => Outcome::Extrovert,
            ],
            [
                'answer'     => 'Hang around you all evening',
                'identifier' => 5,
                'outcome'    => Outcome::Introvert,
            ],
            [
                'answer'     => 'Always drag the conversation back to themselves',
                'identifier' => 5,
                'outcome'    => Outcome::Extrovert,
            ],
        ];

        $answers = collect($answers)->groupBy->identifier;

        foreach ($answers as $identifier => $_answers) {
            foreach ($_answers as $order => $answer) {
                /**
                 * @var Question|null $q
                 */
                $q = $questions->first(fn($el) => $el->identifier == $identifier);
                if ($q) {
                    $ans          = new Answer;
                    $ans->answer  = $answer['answer'];
                    $ans->outcome = $answer['outcome'];
                    $ans->order   = $order + 1;
                    $q->answers()->save($ans);
                }
            }
        }

    }
}
