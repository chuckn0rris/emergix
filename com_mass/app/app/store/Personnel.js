Ext.define('Mass.store.Personnel', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Personnel'],
    model: 'Mass.model.Personnel',
    reference : 'personnelStore',

    autoSync: true,
    autoLoad: true,
    data: {"data":[{"id":"21","first_name":"John"}],"total":1,"success":true},
    proxy: {
        type: 'memory',
        // url: '/index.php?option=com_mass&task=mrpGrid',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});