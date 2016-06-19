<?
include "FHZ_base.php";
recallSession();

$myFile = "eHomeSettings.json";
$fh = fopen($myFile, 'r');
$fileStr = fgets($fh);
fclose($fh);

$settings = json_decode($fileStr,TRUE);


$setName = $_GET["settingName"];
$setVal = $_GET["settingValue"];

if (isset($settings[$setName]))
{
	if (strcasecmp($setVal,"true") == 0)
		$settings[$setName] = True;
	else if (strcasecmp($setVal,"false") == 0)
		$settings[$setName] = False;
	else
		$settings[$setName] = $setVal;

	$json = json_encode($settings);
	$json_clear = str_replace("\\","",$json);

	$fh = fopen($myFile, 'w');
	fwrite($fh, $json_clear);
	fclose($fh);
}
?>
