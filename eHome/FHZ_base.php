<?
 error_reporting(E_ALL);
 ini_set('display_errors', 1);

/* Get the port for the WWW service. */
$service_port = 7777;

/* Get the IP address for the target host. */
/* $address = '10.0.1.6'; oder .99
*/      
$address = '192.168.0.80';

$objectCnt = 0;
$objectNames = array();
$objectTypes = array();
$objectValues = array();

$userCommandObj = "";
$userCommandCmd = "";


function  startSession()
{
    session_start();
    global $address;
    global $service_port;
    global $objectNames;
    global $objectTypes;
    global $objectValues;
    global $objectCnt;
    
    createFHZObjects( $address, $service_port, $objectNames, $objectTypes, $objectValues, $objectCnt);

    $_SESSION['objectCnt'] = $objectCnt;
    $_SESSION['objectNames'] = $objectNames;
    $_SESSION['objectTypes'] = $objectTypes;
    $_SESSION['objectValues'] = $objectValues;


}

function  updateSession()
{
    session_start();
    global $address;
    global $service_port;
    global $objectNames;
    global $objectTypes;
    global $objectValues;
    global $objectCnt;
    
    $_SESSION['objectCnt'] = $objectCnt;
    $_SESSION['objectNames'] = $objectNames;
    $_SESSION['objectTypes'] = $objectTypes;
    $_SESSION['objectValues'] = $objectValues;


}

function  recallSession()
{
    session_start();
    global $address;
    global $service_port;
    global $objectNames;
    global $objectTypes;
    global $objectValues;
    global $objectCnt;

    $objectCnt = $_SESSION['objectCnt'];
    $objectNames = $_SESSION['objectNames'];
    $objectTypes = $_SESSION['objectTypes'];
    $objectValues = $_SESSION['objectValues'];

}

function readResponse($socket, $cmd, $idx)
{
	socket_write($socket, $cmd, strlen($cmd));
	do {
		$out = socket_read($socket, 2048);
	} while (strlen($out) == 0);
	
	if ($out == "OK1")
	{
		$in = strval($idx);
		socket_write($socket, $in, strlen($in));
		do {
			$out = socket_read($socket, 2048);
		} while (strlen($out) == 0);
		return $out;
	}
	else
	{
		return $out;
	}

}


function executeUserCommand($socket, $obj, $cmd)
{
	$out = '';

	if  ($cmd == "RunMakro")
	{
		$in = "RUN_MAKRO";
		socket_write($socket, $in, strlen($in));
		do {
			$out = socket_read($socket, 2048);
		} while (strlen($out) == 0);
		if ($out == "OK1")
		{
			$in = $obj;
			socket_write($socket, $in, strlen($in));
			do {
				$out = socket_read($socket, 2048);
			} while (strlen($out) == 0);
			if ($out == "OK0")
			{
			}
			
		}

	}
	else
	{
		$in = "SET_OBJ_VAL";
		socket_write($socket, $in, strlen($in));
		do {
			$out = socket_read($socket, 2048);
		} while (strlen($out) == 0);
		if ($out == "OK2")
		{
			$in = $obj;
			socket_write($socket, $in, strlen($in));
			do {
				$out = socket_read($socket, 2048);
			} while (strlen($out) == 0);
			if ($out == "OK1")
			{
				$in = $cmd;
				socket_write($socket, $in, strlen($in));
				do {
					$out = socket_read($socket, 2048);
				} while (strlen($out) == 0);
				if ($out == "OK0")
				{
				}
			}
			
		}
	
	}
			
	$in = "BYE";
	socket_write($socket, $in, strlen($in));
	socket_close($socket);

	return 1;
		
}



function createFHZObjects( $address, $service_port, &$objectNames, &$objectTypes, &$objectValues, &$objectCnt)
{
	/* Create a TCP/IP socket. */
	$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
	if ($socket === false) {
	    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
	} 
	else 
	{
		
		//echo "Attempting to connect to '$address' on port '$service_port'...";
		$result = socket_connect($socket, $address, $service_port);
		if ($result === false) {
			usleep(10);
			$result = socket_connect($socket, $address, $service_port);
		}
		if ($result === false) {
			usleep(100);
			$result = socket_connect($socket, $address, $service_port);
		}
		if ($result === false) {
		    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
		} 
		else 
		{
		
//			if ($userCommandCmd != "")
//				executeUserCommand($socket, $userCommandObj,$userCommandCmd);
			
				
			$in = "GET_OBJ_COUNT\n";
			$out = '';
			
			//echo "Get Nr of Objects";
			socket_write($socket, $in, strlen($in));
			//echo "OK.\n";
			
			//echo "Reading response:\n\n";
			
			$out = socket_read($socket, 2048);
			if ($out == "OK0")
			{
				$out = socket_read($socket, 2048);
				$objectCnt = intval($out);
			}
			else
			{
				echo "ELSE-OK0-ReadObjectCount";
			}
			
			flush();
			
			//echo "OBJECTCNT";
			//echo $objectCnt;
	
			// start i = 0 für HomeMaticOnly
			for ($i = 0; $i < $objectCnt; $i++) 
			{
				$in = "GET_OBJ_NAME";
				$out = readResponse($socket, $in, $i);
				array_push($objectNames,$out);
			
				$in = "GET_OBJ_TYPE";
				$out = readResponse($socket, $in, $i);
				array_push($objectTypes,$out);
			
				$in = "GET_OBJ_VAL";
				$out = readResponse($socket, $in, $i);
				array_push($objectValues,$out);
			}
			
			
			$in = "BYE";
			socket_write($socket, $in, strlen($in));
			socket_close($socket);
		
		}	
	}
}


function createFHZSocket ( $address, $service_port, &$socket)
{
	/* Create a TCP/IP socket. */
	$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
	if ($socket === false) {
	    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
	} 
	else 
	{
		
		//echo "Attempting to connect to '$address' on port '$service_port'...";
		$result = socket_connect($socket, $address, $service_port);
		if ($result === false) {
			usleep(1);
			$result = socket_connect($socket, $address, $service_port);
		}
		if ($result === false) {
			usleep(10);
			$result = socket_connect($socket, $address, $service_port);
		}
		if ($result === false) {
		    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
		}
	}
}

function getObjectValue ($objname, $objectNames, $objectValues, $objectCnt)
{
    $i = 0;
    // objectCnt-14??
    // schleife war objectCnt-2, fuer HomeMaticOnly auf objecctCnt
    while (($i < ($objectCnt)) && ($objname != $objectNames[$i])) 
    {
        //echo $objectNames[$i];
        //echo "\n";
        $i++;
    }

    if ($i < $objectCnt)
    {
       	return $objectValues[$i];
    }
    else
    {
        return -99;
    }
}


?>
