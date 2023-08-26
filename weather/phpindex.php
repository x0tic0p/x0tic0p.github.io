<?php
$areaerr = "";
$area = "";
$linksrc = "https://wttr.in/India";
if(isset($_POST['submit'])) {
    if(!empty($_POST['area'])) {
        $area = $_POST['area'];

        if (!preg_match_all("/[a-z][A-Z]/i", $area)) {
            $areaerr = "Only a single word is allowed";
        } else {
            $linksrc = "https://wttr.in/" . $area;
        }
    } else {
        $areaerr = "Please enter an area";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Widget</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .area-error{
            color: red;
        }
    </style>
</head>
<body>
    <div class="weather-widget">
        <h1>Weather Widget By xotic</h1>
        <form method="post">
        <input id="inputarea"type="text" name="area" placeholder="Enter Your Area To Check Weather" style="width: 250px;"/>
        <span class="area-error">*<?php echo $areaerr;?></span>
        <input id="submit" type="submit" name="submit" value="Check Weather"/>
        </form>
        <br><br>
        <iframe src=<?php echo $linksrc;?> class="weather-frame"></iframe>
    </div>
</body>
</html>

