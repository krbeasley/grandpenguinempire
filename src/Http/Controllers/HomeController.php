<?php

namespace App\Http\Controllers;

use App\Http\View;

class HomeController extends Controller
{
    public static function index() : View {
        return new View("pages/home");
    }
}
