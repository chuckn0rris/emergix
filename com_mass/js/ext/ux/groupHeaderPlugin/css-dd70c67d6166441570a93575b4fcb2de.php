<?php 
ob_start ("ob_gzhandler");
header("Content-type: text/css; charset= UTF-8");
header("Cache-Control: must-revalidate");
$expires_time = 1440;
$offset = 60 * $expires_time ;
$ExpStr = "Expires: " . 
gmdate("D, d M Y H:i:s",
time() + $offset) . " GMT";
header($ExpStr);
                ?>

/*** GroupHeaderPlugin.css ***/

td.ux-grid-hd-group-cell {background: url(../resources/images/default/grid/grid3-hrow.gif) repeat-x bottom;}td.ux-grid-hd-nogroup-cell .x-grid3-hd-inner {background: none;}