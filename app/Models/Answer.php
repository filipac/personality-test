<?php

namespace App\Models;

use App\Outcome;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    use HasFactory;

    protected $casts = [
        'outcome' => Outcome::class,
    ];

    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }
}
