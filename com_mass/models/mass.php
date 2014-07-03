<?php
 
defined('_JEXEC') or die( 'Restricted access' );
jimport('joomla.application.component.model');

require_once( 'FirePHPCore/lib/FirePHPCore/fb.php' );




class MassModelMass extends  JModel {
   
	var $db=NULL;
	   
	function __construct(){ 
		parent::__construct();		
		$this->db = &JFactory::getDBO();
		if(get_class($this->db)=='JException'){
			JError::raseError($this->db->code, $this->db->message);
		}
	}
	
	function query($sql){
		$this->db->setQuery($sql);
		return $this->db->query();		
	}	
   
	function escape( $text ){
		return $this->db->getEscaped( $text );
	}
	
	
		/***************************************************************************
	*Return the mass_members record as object for the given joomla user id
	*******************************************************************************/
	function getMemberByJoomlaId($joomla_id){
		$this->db->setQuery("SELECT * FROM #__mass_members  WHERE joomla_id='".$this->escape($joomla_id)."'");
		return $this->db->loadObject();
	}
	

	/****************************************************************
	*Return the user's juga role titles as array , but if returnId = true then it will return array of groups
	****************************************************************/
	function getUserRoles($user_id, $default_role='default', $returnId=false){
		$db		= JFactory::getDBO();//get joomla database object
		$roles 	= array($default_role);//default role of user
		$db->setQuery("SELECT * FROM #__juga_u2g where user_id='{$user_id}'");
		$juga_u2gs	= $db->loadObjectList();
		if($juga_u2gs){
			foreach($juga_u2gs as $juga_u2g){
				$db->setQuery("SELECT * FROM #__juga_groups where id ='{$juga_u2g->group_id}'");
				$juga_groups = $db->loadObject();
				if($juga_groups){
					if($returnId){
						$roles[] = $juga_groups->id;
					}else{
						$roles[] = $juga_groups->title;
					}					
				}
			}
		}
		return $roles;
	}
	
	
	
		function getMRPs( $criteria="", $start=0, $offset=0 ){
		$sql = "SELECT  * FROM #__mass_mrp";
		fb($sql);
		if( $offset > 0 ){
			$sql .= " LIMIT ".intval($start).",".intval($offset);
		}
        $this->query($sql);
		return $this->db->loadObjectlist();	
	}
	

    
        function removeMRP( $id ) {
	
		$db = JFactory::getDBO();
		$sql = "DELETE FROM #__mass_mrp WHERE id={$this->escape( $id )}";
		$db->setQuery($sql);
		fb($sql);
		$db->query();
        return true;
        
    }
    
    
    
	/***************************
	*Return the data for all forms used under excelform tabPanels
	**********************************************************/
	function getExcelFormData($formName, $offer_id, $fileType=1){
		$gridSummaryFields = '';
		switch(strtolower($formName)){				
			case 'travel':
				$query = "SELECT * FROM #__mass_mrp_travel WHERE offer_id = '{$offer_id}' ";				
				$gridSummaryFields	= (array)$this->getExcelFormGridSummary( 'mealstips', $linkid );
				$gridSummaryFields2	= (array)$this->getExcelFormGridSummary( 'lodging', $linkid );
				$gridSummaryFields	= array_merge($gridSummaryFields, $gridSummaryFields2);				
			break;
			case 'personnels':
				$gridSummaryFields	= (array)$this->getExcelFormGridSummary( 'personnelcosts', $linkid );
				$query = "SELECT * FROM #__mass_mrp WHERE offer_id = '{$offer_id}' ";				
			break;
			case 'equipment':
				$gridSummaryFields	= (array)$this->getExcelFormGridSummary( 'equipmentcosts', $linkid );
				$query = "SELECT * FROM #__mass_mrp WHERE offer_id = '{$offer_id}' ";				
			break;
			case 'commodity':
				$gridSummaryFields	= (array)$this->getExcelFormGridSummary( 'commoditycosts', $linkid );
				$query = "SELECT * FROM #__mass_mrp WHERE offer_id = '{$offer_id}' ";				
			break;
			case 'others':
				$gridSummaryFields	= (array)$this->getExcelFormGridSummary( 'othercosts', $linkid );
				$query = "SELECT * FROM #__mass_mrp WHERE offer_id = '{$offer_id}' ";				
			break;
			default:				
				$query = "SELECT * FROM #__mass_mrp WHERE id = '{$offer_id}' ";				
			break;
			
		}
		$this->db->setQuery($query);
		$return = $this->db->loadObject();
		if(!$return){
			$return = $this->getExcelFormData('mrp', $offer_id, $fileType);
		}
		
		if(is_array($gridSummaryFields)){
			foreach($gridSummaryFields as $gridSummaryFieldName=>$gridSummaryFieldValue){				
				$return->{$gridSummaryFieldName} = $gridSummaryFieldValue;
			}
		}
		
		return $return;
	}
	
	/*****************************
	* used to get the summary field for the grid used under excel import/update forms
	****************************************************************/
	function getExcelFormGridSummary($gridName, $offer_id){
		switch(strtolower($gridName)){
			case 'mealstips':
				$query = "SELECT SUM(Rate * Total_Days * Num_Personnel ) as Total_Pier_Diem_Meals_Tips 
						FROM #__mass_mrp_mealstips WHERE linkid = '{$linkid}' ";
			break;
			case 'lodging':
				$query = "SELECT SUM(Rate * Num_Rooms ) as Total_Lodging_Per_Day , 
								 SUM(Rate * Total_Nights * Num_Rooms ) as Total_Lodging_per_Mission 
						FROM #__mass_mrp_lodging WHERE offer_id = '{$offer_id}' ";
			break;
			case 'personnelcosts':
				$query = "SELECT SUM( ((regular_salart_hourly_rate+fringe_benefit_hourly_rate)*total_regular_hours_worked) + (overtime_salary_hourly_rate+(overtime_gringe_benefit_hourly_rate*total_overtime_hours_per_day)) ) as Total_Daily_Personnel_Costs,
								  count(id) as Lines_of_Data_Entered,
								  SUM(((regular_salart_hourly_rate+fringe_benefit_hourly_rate)*total_regular_hours_worked) + (overtime_salary_hourly_rate+(overtime_gringe_benefit_hourly_rate*total_overtime_hours_per_day)) * total_days_mission) as Total_Mission_Personnel_Costs
						FROM #__mass_mrp_personnel WHERE offer_id = '{$offer_id}' ";
			break;
			case 'equipmentcosts':
				$query = "SELECT SUM(pq_cost_per_item* pq_qty) as Total_Equipment_Calculated_by_Quantity ,
								 SUM( pe_rate_per_day * pe_qty) as Total_Daily_Cost,
								 count(id) as Lines_of_Data_Entered,
								 SUM(pe_rate_per_day * pe_qty * pe_total_days_used) as Total_Equipment_Calculated_by_Rate
						FROM #__mass_mrp_equipmentcosts WHERE offer_id = '{$offer_id}' ";
			break;
			case 'commoditycosts':
				$query = "SELECT count(id) as Lines_of_Data_Entered,
								 SUM(pq_cost_per_item * pq_qty) as Total_Commodity_Costs_for_Mission_Calculated_by_Quantity
				 		FROM #__mass_mrp_commoditycosts WHERE offer_id = '{$offer_id}' ";
			break;
			case 'othercosts':
				$query = "SELECT count(id) as Lines_of_Data_Entered,
								 SUM(pq_cost_per_item * pq_qty) as Total_Other_Costs_Calculated_by_Quantity,
								 SUM(pr_rater_per_day * pr_qty * pr_total_days_used) as Total_Other_Costs_Calculated_by_Rate
						FROM #__mass_mrp_othercosts WHERE offer_id = '{$offer_id}' ";
			break;			
		}
		
		$this->db->setQuery($query);
		return $this->db->loadObject();
	}
	
	/***************************
	*Return the data for all grids used under excelform tabPanels
	**********************************************************/
	function getGridData($gridName, $mrp_id, $fileType=1, $start=0, $limit=500){
		switch(strtolower($gridName)){
			case 'mealstips':
				$query = "SELECT * FROM #__mass_mrp_mealstips WHERE mrp_id = '{$mrp_id}' ";
			break;
			case 'lodging':
				$query = "SELECT * FROM #__mass_mrp_lodging WHERE mrp_id = '{$mrp_id}' ";
			break;
			case 'personnelcosts':
				$query = "SELECT * FROM #__mass_mrp_personnel WHERE mrp_id = '{$mrp_id}' ";
			break;
			case 'equipmentcosts':
				$query = "SELECT * FROM #__mass_mrp_equipmentcosts WHERE mrp_id = '{$mrp_id}' ";
			break;
			case 'commoditycosts':
				$query = "SELECT * FROM #__mass_mrp_commoditycosts WHERE mrp_id = '{$mrp_id}' ";
			break;
			case 'othercosts':
				$query = "SELECT * FROM #__mass_mrp_othercosts WHERE mrp_id = '{$mrp_id}' ";
			break;			
		}
		if($limit){
			echo $query	= $query." LIMIT {$start}, {$limit}";
		}
		
		fb($query);
		
		$this->db->setQuery($query);
		
		
		
		return $this->db->loadObjectlist();
	}	
	

	function uploadFile($file, $path, $name=''){
		if( isset( $file )  &&  !$file["error"] ){	
			if($name==''){		
				$name			= $file['name'];
			}
			if( move_uploaded_file($file['tmp_name'] , $path.$name ) ){				
				return $name;
			}
		}
		return false;	
	}
    



}