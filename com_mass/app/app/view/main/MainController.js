Ext.define('Mass.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function() {},

    saveMrp: function(btn) {
        var mrp = this.getView().getRecord();
        if (mrp) {
            mrp.set(this.getView().getValues())
        } else {

            this.addNewRecord(this.getView().getValues());
        }
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
                items: [{
                    xtype: 'addeditmrpform',
                    title: 'Edit MRP'
                }]
            });

        tab.down('addeditmrpform').loadRecord(record);

        tabPanel.setActiveTab(tab);
    },

    refresh: function() {
        this.getView().getStore().load();
    },

    openAddRecordWindow: function() {
        Ext.create('Ext.Window', {
            height: 400,
            width: 300,
            layout: 'fit',
            items: [{
                xtype: 'addeditmrpform',
                title: 'Add MRP'
            }]
        }).show();
    },

    addNewRecord: function(data) {
        var mrp = Ext.create('Mass.model.Mrp', data);
        Mass.app.getMprsStore().add(mrp);
    }
});
