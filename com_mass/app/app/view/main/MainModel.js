Ext.define('Mass.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Mass',
        action: 'Edit'
    },

    formulas: {
    	actionWindowTitle: function(get) {
    		return get('action') + " MRP";
    	}
    }

    //TODO - add data, formulas and/or methods to support your view
});