<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

// Helpers
use App\Helpers\BirthDayDatesHelper;

class Bday extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        // Format the date.
        $this->birth_day = (new BirthDayDatesHelper())->ConvertToNiceFormat($this->birth_day);
        $this->days_to_go = (new BirthDayDatesHelper())->CalculateNumberOfDays($this->birth_day);
        $this->age_in_years = (new BirthDayDatesHelper())->CalculateAgeInYears($this->birth_day);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'birth_day' => $this->birth_day,
            'days_to_go' => $this->days_to_go,
            'age_in_years' => $this->age_in_years
        ];
    }
}
