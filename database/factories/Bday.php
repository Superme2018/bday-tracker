<?php

use Faker\Generator as Faker;

// Models
use App\Bday;

$factory->define(Bday::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'birth_day' => $faker->date,
    ];
});
