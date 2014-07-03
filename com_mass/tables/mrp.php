<?php

require_once( 'FirePHPCore/lib/FirePHPCore/fb.php' );

class JTableMrp extends JTable {
	var $id 								= "";

	var $mrp_title 							= null;

	
	
	
	/**
	* @param database A database connector object
	*/
	function __construct( &$db ){	
		parent::__construct( '#__mass_mrp', 'id', $db );
	}
	
	
	function store($updateNull=false){
	
	
				
		return parent::store($updateNull);		
	}
	




	
	
	

	
	
	
}

?>