<?
include "FHZ_base.php";
recallSession();

echo getObjectValue($_GET["obj"], $objectNames, $objectValues, $objectCnt);
?>
