Ext.define('Mass.view.grid.CommoditiesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'commoditiesgrid',
    requires: [

    ],
    controller: 'main',
    store: 'Commodities',
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
