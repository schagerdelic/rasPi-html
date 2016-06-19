<?
include "FHZ_base.php"
?>

<?

$socket = null;



if (count($_GET) == 1)
{
	$userCommandCmd = "RunMakro";
	$userCommandObj = $_GET["cmd"];	
	
	createFHZSocket ( $address, $service_port, $socket);		
	executeUserCommand($socket, $userCommandObj,$userCommandCmd);

	echo ($userCommandObj . " - OK");
}

?>
