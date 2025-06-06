<?php

namespace App\Http\Controllers;

use App\Http\View;
use GuzzleHttp\Client;

class HomeController extends Controller
{
    public function index() : View {
        $script_url = "https://script.google.com/macros/s/AKfycbwkTY79xn2AbpPQkGhwl6LnKb7UAXX7InrwkNqZ01wIBx1WAw7H-TkT834-6qyC_p9Neg/exec";

        return new View("pages/home");
    }
}