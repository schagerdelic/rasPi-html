<?
include "FHZ_base.php";
//recallSession();

echo "OK";

$myFile = "eHomeSettings.json";
$fh = fopen($myFile, 'w');
$json = $_GET["json"];
$json_clear = str_replace("\\","",$json);
fwrite($fh, $json_clear);
fclose($fh);
?>
