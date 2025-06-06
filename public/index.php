<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require_once dirname(__DIR__) . '/vendor/autoload.php';

$var = "TEST VARIABLE";

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The GPE</title>
</head>
<body>
    <img src="./img/Desk_Obliterated.webp" alt="Desk Obliterated" />

    <h1><?php echo $var; ?></h1>
</body>
</html>