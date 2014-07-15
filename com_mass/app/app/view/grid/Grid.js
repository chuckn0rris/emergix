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
        dataIndex: 'mrp_title',
        text: 'Title',
        flex: 1
    }]
});
