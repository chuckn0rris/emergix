Ext.define('Mass.store.Equipment', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Equipment'],
    model: 'Mass.model.Equipment',
    reference : 'equipmentStore',

    autoSync: true,
    autoLoad: true,
    data: {"data":[{"id":"21","description":"Generator"}],"total":1,"success":true},
    proxy: {
        type: 'memory',
        // url: '/index.php?option=com_mass&task=mrpGrid',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});