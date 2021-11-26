<?php
/* 
    Configure site enviroment and variables
*/
$systemStatus;
if (strpos(__DIR__, 'C:') !== false) {
    $systemStatus = 'LOCAL';
    $base = "/php-react-mvc/";
} else{
    $systemStatus = 'PROD';
    $base = "";
}

define("BASE_URL", $base);

?>