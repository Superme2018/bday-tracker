<?php

use Illuminate\Database\Seeder;

// Models
use App\Bday;

class BdayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Bday::class, 150)->create();
    }
}
