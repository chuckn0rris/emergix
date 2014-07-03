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

/*** filterRow.css ***/

.filter-row .filterInput{height:27px;border:0px solid #ff0000;}.filter-row .filterInput.x-panel{padding-top:8px;}.filter-row .filterInput .x-panel-body{background:transparent;}.filter-row .x-grid3-hd-inner,.filter-row .x-grid3-hd-inner>.x-panel-body{background:url(images/grid3-hrow.gif) repeat-x;}.filter-row td.x-grid3-hd-over>.x-grid3-hd-inner{background:url(images/grid3-hrow-over.gif) repeat-x;}.filter-row td.sort-desc .x-grid3-hd-inner,.filter-row td.sort-asc .x-grid3-hd-inner{background:url(images/grid3-hrow2-over.gif) repeat-x;}.x-filter-icon{background:url(images/filter.png) repeat-x;}.ClearFilter td{border:0px;background:none;}.ClearFiltertd.x-btn-mc{background:url(images/clearfilter.png) no-repeat 30px 0px;}