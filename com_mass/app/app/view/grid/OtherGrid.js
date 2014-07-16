Ext.define('Mass.view.grid.OtherGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'othergrid',
    requires: [

    ],
    controller: 'main',
    store: 'Other',
    tbar: [{
        text: 'Refresh',
        handler: 'refresh'
    }, {
        text: 'Add New Record',
        icon: 'resources/images/add.gif',
        handler: 'addNewEquipmentRecord'
    }],
    columns: [
    
    {
        dataIndex: 'id',
        text: 'ID',
        width: 50
    }, {
        dataIndex: 'description',
        text: 'Description',
        flex: 1
    }
    ]
});
