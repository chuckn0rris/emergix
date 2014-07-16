Ext.define('Mass.view.grid.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'massgrid',
    requires: [
        'Ext.grid.column.Action',
        'Mass.view.main.EditMrpForm'
    ],
    controller: 'main',
    store: 'Mprs',
    tbar: [{
        text: 'Refresh',
        handler: 'refresh'
    }, {
        text: 'Add new MRP',
        icon: 'resources/images/add.gif',
        handler: 'addNewRecord'
    }],
    columns: [
    
    {
            
            width: 95,
            xtype: 'widgetcolumn',
           
 
            widget: {
                width:85,
                xtype: 'button',
         		text:'Actions',
         		menu: [{
                        text:'Edit',
                        listeners:{
                         click: 'editRecord'
                         
                    }
                    },{
                        text:'Delete',
                           listeners:{
                         click: 'deleteRecord'
                         
                    }
                    }]
                }
            }
        , {
        dataIndex: 'id',
        text: 'ID',
        width: 50
    }, {
    	dataIndex: 'mrp_stateema_tn',
    	text: 'State EMA Tracking #',
    },
    {
    	dataIndex: 'mrp_rp_tn',
    	text: 'RP Tracking #'
    },
    {
    	dataIndex: 'mrp_title',
    	text: 'Title'
    },
   
    {
    	dataIndex: 'mrp_discipline',
    	text: 'Discipline'
    },
    {
    	dataIndex: 'mrp_rpa_name',
    	text : 'RPA Name'
    },
    {
    	dataIndex: 'mrp_rpa_city',
    	text: 'RPA City'
    },
    {
    	dataIndex: 'mrp_rpa_state',
    	text: 'RPA State'
    },
    {
    	dataIndex: 'mrp_poc_first_name',
    	text: 'POC First Name'
    },
    {
    	dataIndex: 'mrp_poc_last_name',
    	text: 'POC Last Name'
    },
    {
    	dataIndex: 'mrp_poc_phone',
    	text:'POC Phone'
    },
    {
    	dataIndex: 'mrp_poc_email',
    	text: 'POC Email'
    },
    {
    	dataIndex: 'mrp_nims_type',
    	text: 'NIMs Tier 1 Criteria'
    },
      {
    	dataIndex: 'mrp_travel_estimated_total',
    	text: 'mrp_travel_estimated_total'
    },
      {
    	dataIndex: 'mrp_personnel_estimated_total',
    	text: 'mrp_personnel_estimated_total'
    },
      {
    	dataIndex: 'mrp_equipment_estimated_total',
    	text: 'mrp_equipment_estimated_total'
    },
      {
    	dataIndex: 'mrp_commodity_estimated_total',
    	text: 'mrp_commodity_estimated_total'
    },
      {
    	dataIndex: 'mrp_others_estimated_total',
    	text: 'mrp_others_estimated_total'
    },
      {
    	dataIndex: 'mrp_total_cost_estimate',
    	text: 'mrp_total_cost_estimate'
    }]
});
