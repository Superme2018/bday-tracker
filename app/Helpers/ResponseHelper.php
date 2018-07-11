<?php

namespace App\Helpers;

class ResponseHelper {

    public function SuccessMessage($message){
       return response()->json(['message' => $message], 403);
    }

}
