Ext.define('Mass.model.Mrp', {
    extend: 'Ext.data.Model',
    fields: [{
		name: 'id',
    	type: 'int'
    }, 
     {
    	name: 'mrp_stateema_tn',
    	type: 'string'
    },
    {
    	name: 'mrp_rp_tn',
    	type: 'string'
    },
    {
    	name: 'mrp_title',
    	type: 'string'
    },
   
    {
    	name: 'mrp_discipline',
    	type: 'string'
    },
    {
    	name: 'mrp_rpa_name',
    	type: 'string'
    },
    {
    	name: 'mrp_rpa_city',
    	type: 'string'
    },
    {
    	name: 'mrp_rpa_state',
    	type: 'string'
    },
    {
    	name: 'mrp_poc_first_name',
    	type: 'string'
    },
    {
    	name: 'mrp_poc_last_name',
    	type: 'string'
    },
    {
    	name: 'mrp_poc_phone',
    	type: 'string'
    },
    {
    	name: 'mrp_poc_email',
    	type: 'string'
    },
    {
    	name: 'mrp_nims_type',
    	type: 'string'
    },
      {
    	name: 'mrp_travel_estimated_total',
    	type: 'string'
    },
      {
    	name: 'mrp_personnel_estimated_total',
    	type: 'string'
    },
      {
    	name: 'mrp_equipment_estimated_total',
    	type: 'string'
    },
      {
    	name: 'mrp_commodity_estimated_total',
    	type: 'string'
    },
      {
    	name: 'mrp_others_estimated_total',
    	type: 'string'
    },
      {
    	name: 'mrp_total_cost_estimate',
    	type: 'string'
    }]
});






