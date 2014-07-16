Ext.define('Mass.store.Commodities', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Commodities'],
    model: 'Mass.model.Commodities',
    reference : 'commoditiesStore',

    autoSync: true,
    autoLoad: true,
    data: {"data":[{"id":"21","description":"Oil"}],"total":1,"success":true},
    proxy: {
        type: 'memory',
        // url: '/index.php?option=com_mass&task=mrpGrid',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});