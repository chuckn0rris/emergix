<?php

// no direct access
defined('_JEXEC') or die('Restricted access');


require_once( 'FirePHPCore/lib/FirePHPCore/fb.php' );


global  $controller;



// Require the com_eos helper library
require_once("controller.php");
fb(1);

// Create the controller
$controller = new MassController();



// Perform the Request task
$controller->execute(JRequest::getVar('task', null, 'default', 'cmd'));
$controller->redirect();
