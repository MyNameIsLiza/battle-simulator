<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Battle Simulator</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<h1 class="sword-cursor">Battle Simulator</h1>
<div class="field sword-cursor">
    <?php
    $size = 300;
    for ($j = 1; $j <= 3; $j++) {
    echo ' <div class=row>';
    for ($i = 1; $i <= 3; $i++) {
        echo "<canvas class=enemy width=$size height=$size></canvas>";
    }
    echo '</div>';
        }
    ?>
</div>
<script src="js/index.js"></script>
</body>
</html>