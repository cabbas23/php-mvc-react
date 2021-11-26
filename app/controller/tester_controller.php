<?php
$tester = new tester($db);
$pageTitle = 'Tester Example Page';

// View Content
include_once("app/view/header.php");
?>
<div id="root"></div>
<script type="module" src="app/view/react_prod/<?php echo $mvc; ?>/index.js"></script>
<?php
include_once("app/view/footer.php");
?>