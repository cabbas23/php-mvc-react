<?php
// Change $pageTitle in page controller for custom title in browser tab
$pageTitle = 'Hello!';

if($page){
    if($mvc != null){
        if(file_exists('app/model/'.$mvc.'.class.php')){ 
            // Create object instance of class dynamically
            require_once 'app/model/'.$mvc.'.class.php'; 
            ${$mvc} = new $mvc($db);
        }
        if(file_exists('app/controller/'.$mvc.'_controller.php')){ 
            require_once 'app/controller/'.$mvc.'_controller.php'; 
        }
    }
}
?>