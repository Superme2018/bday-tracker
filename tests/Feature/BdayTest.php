<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

// Utils
use Carbon\Carbon;

// Models
use App\Bday;

class BdayTest extends TestCase
{

     /**
     * Create new Bday test.
     *
     * @return false
    */
    public function testCreate()
    {
        $bDay = factory(Bday::class)->make();

        if(count((new Bday())->createBday($bDay->toArray())))
          return $this->assertTrue(true);

        // Default fail.
        return $this->assertTrue(false);
    }

    /**
     * Update existing Bday test.
     *
     * @return false
    */
    public function testUpdate()
    {
        if(!$bDay = (factory(Bday::class)->make()))
          return $this->assertTrue(false);

        if(count((Bday::first()->updateBday($bDay->toArray()))))
          return $this->assertTrue(true);

        // Default fail.
        return $this->assertTrue(false);
    }

    /**
     * Delete existing Bday test.
     *
     * @return false
    */
    public function testDeleteBday()
    {
        if((Bday::first()->destroyBday()))
          return $this->assertTrue(true);

        // Default fail.
        return $this->assertTrue(false);
    }


}
