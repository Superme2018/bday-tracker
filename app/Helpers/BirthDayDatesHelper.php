<?php

namespace App\Helpers;

use Carbon\Carbon;

class BirthDayDatesHelper {

    /*
     * Would be nice to create a test case for this, and maybe all the other helpers.
    */

    public function ConvertToNiceFormat($date){

      // Not suing carbon directly under the resource as I may want to tweak this at a later date.

      if($carbonDate = Carbon::parse($date))
        return $carbonDate->toFormattedDateString();
      return "Date format incorrect"; // Yeah need to sort something out for this.

    }

    // Calculates number of days to today.
    public function CalculateNumberOfDays($date){
      if($carbonDate = Carbon::parse($date))
        return $this->ConvertDateOfBirthToThisYear($carbonDate)->diffInDays(Carbon::Now()) . " days to go";
      return "Date format incorrect"; // Yeah need to sort something out for this.
    }

    public function CalculateAgeInYears($date){
      if($carbonDate = Carbon::parse($date))
        return $carbonDate->diffInYears(Carbon::Now()) . " years of age";
      return "Date format incorrect"; // Yeah need to sort something out for this.
    }

    private function ConvertDateOfBirthToThisYear($carbonDate){
      if($carbonDate)
        return $currentYearsBirthDay = Carbon::create(Carbon::now()->year, $carbonDate->month, $carbonDate->day);
      return "No date passed in"; // <-- This is definitely internal, so need an internal error handler.
    }

}
