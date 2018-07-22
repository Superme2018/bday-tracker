<?php

namespace App\Http\Controllers;

//
use Illuminate\Http\Request;
use Validator; //<- shorter way.

// Models
use App\Bday;

// Resource
use App\Http\Resources\Bday as BdayResource;

// Helpers
use App\Helpers\ErrorHelper;
use App\Helpers\ResponseHelper;

class BdayController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bDays = Bday::paginate(15);

        // Resource collection.
        return BdayResource::collection($bDays);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // Check the request.
        if(($validator = Validator::make($request->all(), [
            'name' => 'required',
            'birth_day' => 'required|date'
        ]))->fails())
        {
            return (new ErrorHelper)->BadUpdate(); // <- TODO: use dependency injection in construct.
        }

        if($newBday = (new Bday())->createBday($request->all()))
           return (new BdayResource($newBday));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bday  $bday
     * @return \Illuminate\Http\Response
     */
    public function show(Bday $bday)
    {
        // Resource collection.
        return (new BdayResource($bday));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bday  $bday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bday $bday)
    {
        if(!$bday)
          return (new ErrorHelper)->MissingParams();

        if($bday = $bday->updateBday($request->toArray()))
          return (new BdayResource($bday));
        return (new ErrorHelper)->BadUpdate();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bday  $bday
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bday $bday)
    {
        if(!$bday)
         return (new ErrorHelper)->MissingParams();

        if($bday->destroyBday())
          return (new ResponseHelper)->SuccessMessage("Birthday Deleted");
        return (new ErrorHelper)->BadDelete();
    }
}
