Ext.define('Mass.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
    	'grid.Grid'
    ],
    refs: {
    	addButton: "button"
    },
    control: {
        addButton: {
            click: "addNewRecord"
        }
    },

    addNewRecord: function() {
    	alert(2222)
    }
});
