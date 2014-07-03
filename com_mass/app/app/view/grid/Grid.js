Ext.define('Mass.view.grid.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'massgrid',
    requires: [
        'Ext.grid.column.Action',
        'Mass.view.main.AddMrpForm'
    ],
    controller: 'grid',
    store: 'Mprs',
    tbar: [{
        text: 'Refresh',
        handler: 'refresh'
    }, {
        text: 'Add new MRP',
        icon: 'resources/images/add.gif',
        handler: 'addNewRecord'
    }],
    columns: [{
        xtype: 'actioncolumn',
        width: 50,
        items: [{
            icon: 'resources/images/cog_edit.png',
            tooltip: 'Edit',
            handler: 'editRecord'
        },{
            icon: 'resources/images/delete.gif',
            tooltip: 'Delete',
            handler: 'deleteRecord'
        }]
    }, {
        dataIndex: 'id',
        text: 'ID',
        width: 50
    }, {
        dataIndex: 'title',
        text: 'Title',
        flex: 1
    }]
});
