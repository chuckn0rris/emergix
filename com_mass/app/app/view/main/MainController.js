Ext.define('Mass.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    saveMrp: function() {
        this.getView().getRecord().set(this.getView().getValues())
        this.closeMrpFormTab();
    },

    closeMrpFormTab: function() {
        this.getView().up().close();
    },

    deleteRecord: function(scope, colIndex, rowIndex, meta, e, record) {
        this.getView().getStore().remove(record);
    },

    editRecord: function(scope, colIndex, rowIndex, meta, e, record) {
        var tabPanel = this.getView().up('tabpanel'),
            tab = tabPanel.add({
                title: 'Edit MRP',
                closable: true,
                items: [{xtype: 'editmrpform'}]
            });

        tab.down('editmrpform').loadRecord(record);

        tabPanel.setActiveTab(tab);
    },

    refresh: function() {
        this.getView().getStore().load();
    },

    addNewRecord: function(scope) {
        var addRecord = function(btn, text) {
            var mrp = Ext.create('Mass.model.Mrp', {title: text});
            this.getView().getStore().add(mrp);
        };

        Ext.MessageBox.prompt("Add MRP", "Please, type name for new record", addRecord, this);
    }
});
