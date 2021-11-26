<?php

if($cmd == 'tester_shop_ajax'){
    echo '<pre style="max-height:600px; overflow-y: auto; border:1px solid #000;">';
    var_dump($_POST);
    echo '</pre>';
    echo 'ajax success';
}

if($cmd == 'test_get_json'){
    $encodedPOST = json_encode('test');
    echo $encodedPOST;
}

?>