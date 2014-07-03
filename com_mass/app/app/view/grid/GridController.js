Ext.define('Mass.view.grid.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.grid',

    deleteRecord: function() {
        alert("delete record");
    },

    editRecord: function() {
        alert("edit record");
    },

    refresh: function() {
        this.getView().getStore().load();
    },

    addNewRecord: function() {
        var tabPanel = this.getView().up('tabpanel'),
            tab = tabPanel.add({
                title: 'Add new MRP',
                closable: true,
                items: [{
                    xtype: 'addmrpform',
                    height: 100
                }]
            });

        tabPanel.setActiveTab(tab);
    }
});
