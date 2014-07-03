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

/*** MultiSelect.css ***/

.ux-mselect{overflow:auto;background:white;position:relative; zoom:1;overflow:auto;}.ux-mselect-item{font:normal 12px tahoma, arial, helvetica, sans-serif;padding:2px;border:1px solid #fff;white-space: nowrap;cursor:pointer;}.ux-mselect-selected{border:1px dotted #a3bae9 !important;background:#DFE8F6;cursor:pointer;}.x-view-drag-insert-above { border-top:1px dotted #3366cc; } .x-view-drag-insert-below { border-bottom:1px dotted #3366cc; } .multiSelectCheckBoxView dl.x-list-selected{background:url(checkboxon.png) no-repeat #DFE8F6;}.multiSelectCheckBoxView dl{background:url(checkboxoff.png) no-repeat top left;padding-left:15px;}