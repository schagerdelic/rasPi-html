<?
include "FHZ_base.php"
?>

<?

$socket = null;


if (count($_GET) == 2)
{
	if (($_GET["cmd"] == "AN") || ($_GET["cmd"] == "AUS"))
	{
		$userCommandCmd = strtolower($_GET["cmd"]);
		$userCommandObj = $_GET["Object"];
	}
	elseif ($_GET["cmd"] == "AUF")
	{
		$userCommandCmd = "unten";
		$userCommandObj = $_GET["Object"];
	}
	elseif ($_GET["cmd"] == "ZU")
	{
		$userCommandCmd = "oben";
		$userCommandObj = $_GET["Object"];
	}

	
	createFHZSocket ( $address, $service_port, $socket);		
	executeUserCommand($socket, $userCommandObj,$userCommandCmd);
	
	
	createFHZSocket ( $address, $service_port, $socket);		
	executeUserCommand($socket, "Anzeige" , $userCommandObj . " - " . $_GET["cmd"]);
	
	echo ($userCommandObj . " - " . $_GET["cmd"]);

}


?>
