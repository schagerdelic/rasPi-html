<?
include "FHZ_base.php";

createFHZObjects( $address, $service_port, $objectNames, $objectTypes, $objectValues, $objectCnt);
//updateSession();

echo "<table class=gesamttable>";

//  (schleife war bis objectCnt-1, jetzt bis objectCnt fuer HomeMaticOnly)
for ($i = 0; $i < $objectCnt; $i++) {
	if (($objectTypes[$i]=="Zeichen") || stristr($objectTypes[$i],"sensor") || stristr($objectTypes[$i],"menge") || ($objectNames[$i]=="Regen"))
	{
		echo "<tr>";
		echo "<td class=gesamtcaption>";
			echo $objectNames[$i];
		echo "</td>";
		echo "<td class=gesamtvalue><DIV id=Anzeige" . $i . ">";
			echo $objectValues[$i]; 
		echo "</DIV></td>";
		echo "</tr>";
	}		
}
echo "</table>";

?>

