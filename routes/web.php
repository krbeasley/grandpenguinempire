<?php

use App\Http\Controllers\HomeController;
use Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::get("/", [HomeController::class, "index"]);