<?php

namespace App\Helpers;

class ErrorHelper {

    public function BadUpdate(){
        return Response::json(array(
                  'code'  =>  401,
                  'message' =>  $message
                ), 401);
    }

    public function BadDelete(){
        return response()->json(['error' => 'Bad delete'], 403);
    }

    public function MissingParams(){
        return response()->json(['error' => 'Missing params'], 403);
    }

}
