<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Larapack\AttributePurging\Purgeable;

class Question extends Model
{
    use HasFactory;

    use Purgeable;

    protected $purge = ['identifier'];

    public static function count(): int
    {
        return static::query()->count();
    }

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }
}
