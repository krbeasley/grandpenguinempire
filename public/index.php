<?php

$ROOT = dirname(__DIR__);
require_once "$ROOT/vendor/autoload.php";

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$dotenv = Dotenv\Dotenv::createImmutable($ROOT);
$dotenv->load();

use Pecee\SimpleRouter\SimpleRouter;
require_once "$ROOT/routes/web.php";

SimpleRouter::setDefaultNamespace("App\Http\Controllers");
SimpleRouter::start();