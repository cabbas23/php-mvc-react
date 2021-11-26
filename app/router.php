<?php
/* 
    Router logic documentation: https://phprouter.com/ (slightly modified)
*/

if (session_status() === PHP_SESSION_NONE) {
	session_start();
}

// PDO Database Class / Connection
function get_db(){
    /* require_once '../DATABASE/pdo_db.class.php';
    $db = new db(); */
    $db = 'test';
    return $db;
}
function get_main_model($db){
    require_once 'app/model/model.class.php';
    $jds = new model($db);
    return $jds;
}

function add_route($type, $route, $file, $mvc = null, $page = true){
    $continue = false;
    if($type == 'GET' && $_SERVER['REQUEST_METHOD'] == 'GET'){ $continue = true; }
    if($type == 'POST' && $_SERVER['REQUEST_METHOD'] == 'POST'){ $continue = true; }
    if($type == 'PUT' && $_SERVER['REQUEST_METHOD'] == 'PUT'){ $continue = true; }
    if($type == 'PATCH' && $_SERVER['REQUEST_METHOD'] == 'PATCH'){ $continue = true; }
    if($type == 'DELETE' && $_SERVER['REQUEST_METHOD'] == 'DELETE'){ $continue = true; }
    if($type == 'ANY'){ $continue = true; }

    if($continue){
        /* $starttime = microtime(true);
        $endtime = microtime(true);
        printf("Server side rendered in %f seconds", $endtime - $starttime ); */

        // Stop if 404
        if($route == "/404"){
            // Include data
            require_once 'app/config.php';
            require_once 'app/controller/controller.php';
            require_once("$file");
            exit();
        }  
    
        $request_url = filter_var($_SERVER['REQUEST_URI'], FILTER_SANITIZE_URL);
        $request_url = str_replace('php-mvc-react/', '',  $request_url);
        $request_url = rtrim($request_url, '/');
        $request_url = strtok($request_url, '?');
        $route_parts = explode('/', $route);
        $request_url_parts = explode('/', $request_url);
        array_shift($route_parts);
        array_shift($request_url_parts);
    
        // If route is only /
        if( $route_parts[0] == '' && count($request_url_parts) == 0 ){
            // Include data
            $db = get_db();
            $model = get_main_model($db);
            require_once 'app/config.php';
            require_once 'app/controller/controller.php';
            require_once("$file");
            exit();
        }

        if( count($route_parts) != count($request_url_parts) ){ return; } 
    
        // If multi component route
        $parameters = [];
        for( $__i__ = 0; $__i__ < count($route_parts); $__i__++ ){
            $route_part = $route_parts[$__i__];
            if( preg_match("/^[$]/", $route_part) ){
                $route_part = ltrim($route_part, '$');
                array_push($parameters, $request_url_parts[$__i__]);
                $$route_part=$request_url_parts[$__i__];
            }
            else if( $route_parts[$__i__] != $request_url_parts[$__i__] ){
                return;
            } 
        }
        // Include data
        $db = get_db();
        $model = get_main_model($db);
        require_once 'app/config.php';
        require_once 'app/controller/controller.php';
        require_once("$file");
        exit();
    }
}

?>