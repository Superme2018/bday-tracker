<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bday extends Model
{

    protected  $fillable = ["name", "birth_day"];

    /*
     * Create a new bDay record.
    */
    public function createBday(Array $bDay){

        $this->fill($bDay);

        if($this->save())
          return $this;
        return false;

    }

    /*
     * Update existing bDay record.
    */
    public function updateBday(Array $bDay){

        $this->fill($bDay);

        if($this->save())
          return $this;
        return false;

    }

    /*
     * Delete existing bDay record.
    */
    public function destroyBday(){

        if($this->delete())
          return true;
        return false;

    }
}
