<?php
/**
 * @version		$Id: view.html.php $
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
defined('_JEXEC') or die( 'Restricted access' );

jimport('joomla.application.component.view');

require_once( 'FirePHPCore/lib/FirePHPCore/fb.php' );

/**
 * HTML eos View class for the Eos component
 *
 * @package		Joomla
 * @subpackage	Eos
 * @since 1.5
 */
class MassViewDefault extends JView{

	function display($tpl = null){
		global $mainframe;		
		$user		= & JFactory::getUser();		
		$db			= & JFactory::getDBO();	
		$model		= $this->getModel();	
		
		/*
		$member		= $model->getMemberByJoomlaId( $user->id );		
			
		if( $member ){
			$id = $member->Member_Id;
		}elseif($user->get('gid')==25){
			$id = 0;
		}else{
			JError::raiseError( 403, JText::_("ALERTNOTAUTH") );			
			return;
		}
   		
		
		
		
		$user->roles 						= $model->getUserRoles( $user->id, 'default_role' );
		$user->memberDetails				= new stdClass();	
		$user->memberDetails->email 		= $member->email;
		$user->memberDetails->Member_Id 	= $member->Member_Id;
		$user->memberDetails->first_name 	= $member->first_name;
		$user->memberDetails->last_name 	= $member->last_name;
		$user->memberDetails->mobile 		= $member->mobile;
		$user->memberDetails->voice 		= $member->voice;
		$user->memberDetails->state 		= $member->state;
		

		*/
		
		parent::display($tpl);
	}
	
	function showContent(){
		parent::display(null);
	}
	
}
?>
