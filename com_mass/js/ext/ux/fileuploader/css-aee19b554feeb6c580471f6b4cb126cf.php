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

/*** fileuploader.css ***/

.qq-uploader { position:relative; width: 100%;}.qq-upload-button {display:block; width: 125px; padding: 7px 0; text-align:center;background:#777777; border-bottom:1px solid #ddd;color:#fff;font-family: Arial;font-size: 13px;}.qq-upload-toolbarbutton {display:block; text-align:center; width: 45px;top:8px;font-family: Arial;font-size: 11px;}.qq-upload-button-hover {background:#cccccc;}.qq-upload-button-focus {outline:1px dotted black;}.qq-upload-drop-area {position:absolute; top:0; left:0; width:100%; height:100%; min-height: 70px; z-index:2;background:#FF9797; text-align:center; }.qq-upload-drop-area span {display:block; position:absolute; top: 50%; width:100%; margin-top:-8px; font-size:16px;}.qq-upload-drop-area-active {background:#FF7171;}.qq-upload-list {margin:15px 0px; padding:0; list-style:disc;}.qq-upload-list li { margin:0; padding:0; line-height:15px; font-size:12px;}.qq-upload-file, .qq-upload-spinner, .qq-upload-size, .qq-upload-cancel, .qq-upload-failed-text {display:block;margin-right: 7px;}.qq-upload-file {}.qq-upload-spinner {display:inline-block; background: url("loading.gif"); width:15px; height:15px; vertical-align:text-bottom;}.qq-upload-size,.qq-upload-cancel {font-size:11px;}.qq-upload-failed-text {display:none;}.qq-upload-fail .qq-upload-failed-text {display:inline;}