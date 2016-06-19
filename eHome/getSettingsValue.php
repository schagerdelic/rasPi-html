<?
include "FHZ_base.php";
//recallSession();

$myFile = "eHomeSettings.json";
$fh = fopen($myFile, 'r');
$fileStr = fgets($fh);
fclose($fh);

$settings = json_decode($fileStr,TRUE);


$setName = $_GET["settingName"];

if (isset($settings[$setName]))
{
	echo $settings[$setName];
}
else
{
	echo "NaN";
}
?>
