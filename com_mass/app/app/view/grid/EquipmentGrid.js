Ext.define('Mass.view.grid.EquipmentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'equipmentgrid',
    requires: [

    ],
    controller: 'main',
    store: 'Equipment',
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
