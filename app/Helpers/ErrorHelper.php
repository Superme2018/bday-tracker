<?php

namespace App\Helpers;

class ErrorHelper {

    public function BadUpdate(){
        return response()->json(['error' => 'Bad update'], 403);
    }

    public function BadDelete(){
        return response()->json(['error' => 'Bad delete'], 403);
    }

    public function MissingParams(){
        return response()->json(['error' => 'Missing params'], 403);
    }

}
