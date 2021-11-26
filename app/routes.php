<?php
/* 
    Valid URL Routes for the site
    add_route($type, $route, $file, $mvc = null, $page = true)
*/

// GET routes
add_route('GET', '/', 'app/view/home.php');
add_route('GET', '/tester', 'app/controller/tester_controller.php', 'tester');

// POST routes
add_route('POST', '/ajax', 'app/POST/ajax/ajax_request.php', null, false);

// ANY, 404 (needs to be last)
add_route('ANY', '/404', 'app/view/404.php');

?>
