<?php
/* 
    This file acts as an ajax controller
    $db and $jds main model are included from the router
*/

if(isset($_POST)){
    if(isset($_POST['mvc']) && isset($_POST['cmd'])){

        $cmd = $_POST['cmd'];
        $mvcName = $_POST['mvc'];

        if(file_exists('app/model/'.$mvcName.'.class.php')){ 
            // Create object instance of class dynamically
            require_once 'app/model/'.$mvcName.'.class.php'; 
            ${$mvcName} = new $mvcName($db);
        }

        include_once('app/POST/ajax/'.$mvcName.'_ajax.php');

    }
}

?>