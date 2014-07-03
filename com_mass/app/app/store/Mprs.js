Ext.define('Mass.store.Mprs', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Mrp'],
    model: 'Mass.model.Mrp',

    autoSync: true,
    autoLoad: true,
    proxy: {
        type: 'memory',
        // url: 'http://www.thunkerbolt.com/index.php?option=com_mass&task=mrpGrid',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },

    data: [{
        id: 1, title: "Title 1"
    },{
        id: 2, title: "Title 2"
    },{
        id: 3, title: "Title 3"
    },{
        id: 4, title: "Title 4"
    },{
        id: 5, title: "Title 5"
    },{
        id: 6, title: "Title 6"
    },{
        id: 7, title: "Title 7"
    }]
});