<?php // no direct access
defined('_JEXEC') or die('Restricted access');
$siteUrl = JURI::base();
global $option;
$componentUrl	= $siteUrl.'components/com_mass/';
$scriptUrl      = $componentUrl.'js/';
$user			= $this->user;
$rand			= $this->rand;

?>
<title>...</title>



<link rel="stylesheet" type="text/css" href="<?php echo $scriptUrl; ?>ext/resources/css/ext-all.css?rand=<?php echo $rand; ?>" />

<link rel="stylesheet" type="text/css" href="<?php echo $scriptUrl; ?>ext/ux/groupTab/css/GroupTab.css?rand=<?php echo $rand; ?>" />

<link rel="stylesheet" type="text/css" href="<?php echo $scriptUrl; ?>ext/ux/filterRow/filterRow.css?rand=<?php echo $rand; ?>" />





<style>

</style>


<script type="text/javascript" src="<?php echo $scriptUrl; ?>ext/adapter/ext/ext-base.js?rand=<?php echo $rand; ?>"></script>

<script type="text/javascript" src="<?php echo $scriptUrl; ?>ext/ext-all.js?rand=<?php echo $rand; ?>"></script>
<script language="javascript" type="text/javascript">
	var member_id 	= '929';



	Ext.onReady(function(){

		try{


		}
		catch(err)
		{
		
		}
		
	
		
		
	});
</script>


<script type="text/javascript" src="<?php echo $scriptUrl; ?>mass/main.js?rand=<?php echo $rand; ?>"></script> 


<script type="text/javascript" src="<?php echo $scriptUrl; ?>ext/ux/filterRow/filterRow.js?rand=<?php echo $rand; ?>"></script>

<script type="text/javascript" src="<?php echo $scriptUrl; ?>ext/ux/groupTab/GroupTabPanel.js?rand=<?php echo $rand; ?>"></script>
<script type="text/javascript" src="<?php echo $scriptUrl; ?>ext/ux/groupTab/GroupTab.js?rand=<?php echo $rand; ?>"></script>



<script type="text/javascript" src="<?php echo $scriptUrl; ?>mass/mainTabs.js?rand=<?php echo $rand; ?>"></script>



<script type="text/javascript" src="<?php echo $scriptUrl; ?>mass/grids/mrpGrid.js?rand=<?php echo $rand; ?>"></script>
<script type="text/javascript" src="<?php echo $scriptUrl; ?>mass/panels/mrpPanel.js?rand=<?php echo $rand; ?>"></script>
<script type="text/javascript" src="<?php echo $scriptUrl; ?>mass/forms/mrpFormPanel.js?rand=<?php echo $rand; ?>"></script>




<div id="mainTabs" class="container ext" ></div>


