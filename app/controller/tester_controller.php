<?php
$tester = new tester($db);
$pageTitle = 'Tester Example Page';

// Curl Test Data
$testURL = 'https://jsonplaceholder.typicode.com/todos/';
$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$testURL);
$result=curl_exec($ch);
curl_close($ch);

$data = json_decode($result);
$testData = json_encode($data);

// View Content
include_once("app/view/header.php");

/* echo '<pre style="max-height:600px; overflow-y: auto; border:1px solid #000;">';
var_dump($data);
echo '</pre>'; */

?>
<div id="root"></div>
<script>
    const testData = JSON.parse('<?php echo $testData;?>');
</script>
<script type="module" src="<?=BASE_URL?>app/view/react_prod/<?=$mvc?>/index.js"></script>
<?php
include_once("app/view/footer.php");
?>