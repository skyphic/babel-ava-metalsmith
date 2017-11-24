<?php
ini_set("display_errors", 1);
header('Access-Control-Allow-Origin:*');
header("Content-Type: application/json; charset=utf-8");


$json = <<<EOD
{
    "status": 1,
    "list": {
        "coupon": 1,
        "vacancy": 0,
        "arrival": 1,
        "event": 1
    }
}			
EOD;

echo $json;

?>