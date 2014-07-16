Ext.define('Mass.store.Other', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Other'],
    model: 'Mass.model.Other',
    reference : 'otherStore',

    autoSync: true,
    autoLoad: true,
    data: {"data":[{"id":"21","description":"Something else"}],"total":1,"success":true},
    proxy: {
        type: 'memory',
        // url: '/index.php?option=com_mass&task=mrpGrid',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});