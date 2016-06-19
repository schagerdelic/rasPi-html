<?php 
//  To add this file simply look that your server can handle SSI (Server side includes) and just add this line where you want the counter 
// 
// <!--#include virtual="counter.php3"-->
// 
//
                               /* Configuration */

$text = 1 ;                                                 // 0= graphic counter 1=text counter
$file="ikdl.count";                             // File that will be used to count
$images="http://127.0.0.1/imagenes/";          // directory of images or http
$imagesext=".gif";                                      // file extension .jpg.gif.xxx anything you like
//echo "Erase This line";



/* Do Not edit below this point unless you know what you are doing */
if (!file_exists($file)) // Look if file exists
 {
  $fp = fopen($file,"w");   //if it dosen't create it 
  fputs ($fp,"0" );  // lets add a 0 in it
  } 
else 
  { 
  $fp = fopen($file,"r+"); 
  };


$numcount= fread($fp,filesize($file));
fclose($fp);

if ($text)
  {
    echo $numcount;
  }
else
 {
   $longstr = strlen($numcount);
  for ($x=0; $x < $longstr; $x++)
    {
    echo "<img src=" ;
    echo $images;
    echo substr($numcount,$x,1);
    echo $imagesext;
    echo ">";
    }
  }

?>
