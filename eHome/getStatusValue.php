<?
include "FHZ_base.php";
//recallSession();
createFHZObjects( $address, $service_port, $objectNames, $objectTypes, $objectValues, $objectCnt);


class myJSONobj
{
      public $innentemp   = "13";
      public $innenhumid = "12";
      public $aussentemp   = "24";
      public $aussenhumid = "20";
      public $wind   = "1,3";
      public $niederschlag = "0,51";
      public $gefrierfach   = "-20,7";
      public $waschmaschine   = "OK";
      public $regen = "aus";
      public $tempSchlafen = "33";
      public $tempBad = "44";
      public $tempKinder = "55";
      public $feuchteSchlafen = "66";
      public $feuchteBad = "77";
      public $feuchteKinder = "88";
      
}
$obj = new myJSONobj();
  
  
$obj->innentemp =  getObjectValue("Temperatur_Wohnen", $objectNames,$objectValues, $objectCnt);
$obj->innenhumid =  intval(getObjectValue("Feuchte_Wohnen", $objectNames,$objectValues, $objectCnt));
$obj->aussentemp =  getObjectValue("Aussentemperatur", $objectNames,$objectValues, $objectCnt);
$obj->aussenhumid =  intval(getObjectValue("Aussenluftfeuchte", $objectNames,$objectValues, $objectCnt));
$obj->wind =  strval(intval(getObjectValue("KS300_Wind", $objectNames,$objectValues, $objectCnt)));
$obj->niederschlag =  getObjectValue("KS300_RegenATag", $objectNames,$objectValues, $objectCnt);
$obj->gefrierfach =  getObjectValue("Temperatur_Gefrierfach", $objectNames,$objectValues, $objectCnt);
$obj->waschmaschine =  getObjectValue("BadWasser", $objectNames,$objectValues, $objectCnt);
$obj->regen =  getObjectValue("Regen", $objectNames,$objectValues, $objectCnt);

$obj->tempSchlafen = getObjectValue("Temperatur_Schlafen", $objectNames,$objectValues, $objectCnt);
$obj->tempBad = getObjectValue("Temperatur_Bad", $objectNames,$objectValues, $objectCnt);
$obj->tempKinder = getObjectValue("Temperatur_Kinder", $objectNames,$objectValues, $objectCnt);
$obj->feuchteSchlafen = getObjectValue("Feuchte_Schlafen", $objectNames,$objectValues, $objectCnt);
$obj->feuchteBad = getObjectValue("Feuchte_Bad", $objectNames,$objectValues, $objectCnt);

$obj->feuchteKinder = getObjectValue("Feuchte_Kinder", $objectNames,$objectValues, $objectCnt);


echo "[";  
echo json_encode($obj);
echo "]";

?>
