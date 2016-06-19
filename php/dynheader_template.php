<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0028)http://www.schagerdelic.com/ -->
<html>

<head>
<title>Schagerdelic, Baby!</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<META NAME="CREATOR" CONTENT="Gerhard Schagerl">
<META NAME="AUTHOR" CONTENT="Gerhard Schagerl">
<META NAME="DESCRIPTION" CONTENT="Personal Homepage of Gerhard Schagerl, HTPC Tools, Picture Gallery">
<link href="/schagerdelic.css" type="text/css" rel="STYLESHEET">
</head>

<script language="javascript">

<!--


var size = 1;
var winHeight = 1024;
var winWidth = 768;

var time = 500; //ms
var steps = 100;

function getWinSize()
{
	winHeight = top.document.body.clientHeight;
	winWidth = top.document.body.clientWidth;
}




function setHeight()
{
	targetPixelH = 550;//winHeight * 0.7;
	
        size++;

	var h1 = targetPixelH * (size/steps);
	var h2 = 55 * (size/steps);
	
	document.getElementById('bar1').height = (winHeight - h1) / 2;
	document.getElementById('bar2').height = h1;
	document.getElementById('bar3').height = (winHeight - h1) / 2;
	/*
	if (size < 55)
	{
		document.getElementById('titleImg').height = size;
	}
	else
	{
		document.getElementById('titleImg').height = 55;
	}
	*/
	document.getElementById('titleImg').height = h2;
	

}

function showMainLayer()
{
	document.getElementById('layer1').style.display = "none";
	document.getElementById('layer2').style.display = "block";
}

function grow()
{
	getWinSize();
		
	var i = 1;
	while (i<steps)
	{
		window.setTimeout("setHeight()",i*time/steps);
		i++;
	}
	i++;
	window.setTimeout("showMainLayer()",i*time/steps);
	

}



//-->
</script>
<body vLink="#ff8040" aLink="#ff8040" link="#ff8040" bgColor="#c0c0c0" leftMargin="0" topMargin="0" scroll="no" rightMargin="0" marginheight="0" marginwidth="0" onload="grow()">





<div id="layer1" style="display:block">
  <table style="BORDER-COLLAPSE: collapse" height="100%" cellSpacing="0" cellPadding="0" width="100%" border="0" id="mainTable">
    <tr>
      <td id="bar1" width="100%" height="50%">
      <table id="AutoNumber2"  height="100%" cellSpacing="0" cellPadding="0" width="100%" border="0">
        <tr>
          <td width="100%" class="CounterText">&nbsp;</td>
        </tr>
        <tr>
          <td width="100%" class="CounterText">&nbsp;</td>
        </tr>
        <tr>
          <td class="WhiteBG" width="100%" height="2"></td>
        </tr>
      </table>
      </td>
    </tr>
    <tr>
     <td class="DarkBlueBG" id="bar2" width="100%" height="1" align="center">
      <table height="100%" cellSpacing="0" cellPadding="0" width="650" border="0">
        <tr>
          <td class="BlueBG" width="150" align="center">
          <table height="100%" cellSpacing="0" cellPadding="10" border="0" width="170" >
            <tr height="10">
              <td width="150" height="1"></td>
            </tr>
          </table>
          </td>
          <td class="DarkBlueBG" vAlign="top" width="500">
          <table class="DarkBlueBG" cellSpacing="0" cellPadding="0" border="0">
            <tr>
              <td vAlign="top" align="right">
              <img src="images/title_2.gif" id="titleImg" height="1"></td>
            </tr>
            <tr height="100%">
              <td bgcolor="#000060"></td>
            </tr>
          </table>
          </td>
        </tr>
      </table>
      </td>
    </tr>
    <tr>
      <td id="bar3" width="100%" height="50%">
      <table height="100%" cellSpacing="0" cellPadding="0" width="100%" border="0">
        <tr>
          <td class="WhiteBG" width="100%" height="2"></td>
        </tr>
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
      </table>
      </td>
    </tr>
  </table>
</div>



<div id="layer2" style="display:none">
  <table height="100%" cellSpacing="0" cellPadding="0" width="100%" border="0">
    <tr>
      <td width="100%" height="15%">
      <table height="100%" cellSpacing="0" cellPadding="0" width="100%" border="0">
        <tr>
          <td width="100%" class="CounterText">&nbsp;</td>
        </tr>
        <tr>
          <td width="100%" class="CounterText">&nbsp;</td>
        </tr>
        <tr>
          <td class="WhiteBG" width="100%" height="2"></td>
        </tr>
      </table>
      </td>
    </tr>
    <tr>
      <td class="DarkBlueBG" width="100%" height="550" align="center">
      <table height="100%" cellSpacing="0" cellPadding="0" width="650">
        <tr>
          <td class="BlueBG" width="150" align="center" >
          <table height="100%" cellSpacing="0" cellPadding="10" border="0" width="170" >
            <tr>
              <td width="150" height="130"></td>
            </tr>
            <tr height="100%"><td width="150" valign="top">