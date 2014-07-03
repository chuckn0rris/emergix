<?php
/**
 * @version		$Id: controller.php $
 * @package		Joomla
 * @subpackage	Eos
 * @copyright	Copyright (C) 2005 - 2008 Open Source Matters. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 * Joomla! is free software. This version may have been modified pursuant to the
 * GNU General Public License, and as distributed it includes or is derivative
 * of works licensed under the GNU General Public License or other free or open
 * source software licenses. See COPYRIGHT.php for copyright notices and
 * details.
 */

// Check to ensure this file is included in Joomla!
defined( '_JEXEC' ) or die( 'Restricted access' );
error_reporting( E_ALL );

JImport( 'joomla.application.component.controller' );
JTable::addIncludePath( JPATH_COMPONENT.DS.'tables' );


require_once( 'FirePHPCore/lib/FirePHPCore/fb.php' );



class MassController extends JController{

	
	function __construct(){
		parent::__construct();
		global $option;
		$componentUrl						= JUri::base().'components/'.$option.'/';
		
	}
	
	/**********************************
	 * Method to show an form as the main page display
	 *
	 * @access	public
	 * @since	1.5
	 ****************************************************/
	function display(){
		JHTML::_('behavior.caption');
				
		// Set a default view if none exists
		if ( ! JRequest::getCmd( 'view' ) ) {			
			JRequest::setVar('view', 'mass' );
		}
		$viewName	= JRequest::getVar('view' );
		$model 		= $this->getModel('mass');		
		$view 		= $this->getView($viewName, 'html');
		$view->setModel($model, true);//set the default model
		
		
		
		
		$mrp_id			= JRequest::getVar('mrp_id', 0);

		
		//generate a random number to ensure code files do not load from cache.
		$rand			= JRequest::getVar('rand', '');
	


		$view->display();		
	}
	
	
		function mrpGrid(){
		$mainframe  = &JFactory::getApplication();
		ob_start();		
		$query				= JRequest::getVar('query','');
		$start				= JRequest::getVar('start',0);
		$limit				= JRequest::getVar('limit',100);
		$model				= $this->getModel('mass');
		$rows				= $model->getMRPs($query, $start , $limit	);
		$result 			= new stdClass();
		$result->data		= $rows;
		$result->total		= count($rows);
		$result->success	= true;
		$json 			=  json_encode($result);
	
		echo $json;	
		
		$mainframe->close();	
	}
	

	function loadMRP(){
		$mainframe  = &JFactory::getApplication();
		ob_start();
			
		$result				= array();		
	
		$mrp_id 			= JRequest::getVar('id');		
		$table 				= JTable::getInstance('Mrp', 'JTable');
		$table->load($mrp_id);
		$result['data']			= (array)$table;
		
		unset($result['data']['_tbl']);
		unset($result['data']['_tbl_key']);
		unset($result['data']['_db']);
		$result['success'] 	= true;
		$s = ob_get_clean();
		$_SESSION['loadMRP'] = $s;			
		echo json_encode($result);
		$mainframe->close();
	}
	
	
	function saveMRP()
	{
				fb('Save MRP');
				$mainframe  = &JFactory::getApplication();
				ob_start();
				$post			= JRequest::get('request');
				$result		= new stdClass();
				
		
				$table		 		= JTable::getInstance('Mrp', 'JTable');
				$table->bind($post);
				
				if(!$table->store(false)){
					$result->success	= false;
					$result->feedback	= $table->_db->getErrorMsg();
				}
				else
				{
				$result->success	= true;
				}
			
			echo json_encode($result);
			$mainframe->close();
	
	}
	
	function removeMRP(){
		$mainframe  = &JFactory::getApplication();
		ob_start();	
		$id	= JRequest::getVar('id',0);
		$model		= $this->getModel('mass');
		$result		= new stdClass();		
		$model->removeMRP($id);
		$result->message	= "Removed";
		$result->success    = true;
		$s = ob_get_clean();
		$_SESSION['removeMRP'] = $s;
		echo json_encode($result);
		$mainframe->close();
	}
	


	}
	


