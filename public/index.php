<?php

$ROOT = dirname(__DIR__);
require_once "$ROOT/vendor/autoload.php";

use Dotenv\Dotenv;
use Pecee\SimpleRouter\SimpleRouter;

// Load the routes
require_once "$ROOT/routes/web.php";

error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$dotenv = Dotenv::createImmutable($ROOT);
$dotenv->load();

SimpleRouter::setDefaultNamespace("App\Http\Controllers");
SimpleRouter::start();