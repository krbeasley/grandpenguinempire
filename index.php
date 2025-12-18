<?php

session_start();

define("GPE_START" , microtime(true));

require_once "vendor/autoload.php";

use App\Http\Controllers\APIController;
use App\Http\Controllers\HomeController;
use Dotenv\Dotenv;
use Cheechstack\Routing\Router;
use Cheechstack\Routing\Route;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$router = new Router();
$request = \Symfony\Component\HttpFoundation\Request::createFromGlobals();

$routes = [
    // Home ('/') route
    new Route("/" , "GET", [HomeController::class, "index"]),

    // API Routes
    new Route("/api/game-night" , "GET", [APIController::class, "gameNightData"]),
];

$router->add($routes);
return $router->handle($request)->send();
