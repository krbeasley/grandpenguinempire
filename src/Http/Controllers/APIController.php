<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class APIController extends Controller
{
    public static function gameNightData() : JsonResponse {
        $data = file_get_contents(dirname(__DIR__, 3) . '/storage/game-night.json');
        if (!$data) {
            return new JsonResponse("Not Found", 404);
        }

        return new JsonResponse($data, 200);
    }
}
