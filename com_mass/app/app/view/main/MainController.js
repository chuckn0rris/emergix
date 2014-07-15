Ext.define('Mass.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: ['Ext.MessageBox'],
    requires: ['Ext.form.field.File'],

    reference : 'mainController',
    alias: 'controller.main',
    saveMrp: function() {
        tab.down('editmrpform').getForm().submit({
            clientValidation: true,
            url: '/index.php?option=com_mass',
            waitMsg: 'Saving',
            params: {
                task: 'saveMRP'
            },
            success: function(form, action) {},
            failure: function(form, action) {
                switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    Ext.Msg.alert('Failure', action.result.msg);
                }
            }
        });
    },
    closeMrpFormTab: function() {
        //this.getView().up().close();
        tab.close();
    },
    saveNewMrp: function() {


        this.lookupReference('addMrpForm').submit({
            clientValidation: true,
            scope: this,
            url: '/index.php?option=com_mass',
            waitMsg: 'Saving',
            params: {
                id: 0,
                task: 'saveMRP'
            },
            success: function(form, action) {
                this.lookupReference('addMrpWindow').close();
                this.getView().down('massgrid').getStore().reload();

                var tabPanel = this.getView().down('tabpanel');
                tab = tabPanel.add({
                    title: 'Edit MRP #' + action.result.id,
                    id : 'mrp_'+action.result.id,
                    mrp_id : action.result.id,
                    closable: true,
                    bbar: [{
                        text: 'Save',
                        icon: 'resources/images/add.gif',
                        handler: 'saveMrp',
                        xtype: 'button'
                    }, {
                        text: 'Cancel',
                        icon: 'resources/images/delete.gif',
                        handler: 'closeMrpFormTab',
                        xtype: 'button'
                    },
                     {
                        text: 'Import MRP',
                        icon: 'resources/images/delete.gif',
                        handler: 'importMrp',
                        xtype: 'button'
                    }],
                    layout: 'fit',
                    items: [{
                        xtype: 'mrpformtabpanel'
                    }]
                });

                tab.down('editmrpform').getForm().load({
                    url: '/index.php?option=com_mass',
                    waitMsg: 'Loading',
                    params: {
                        id: action.result.id,
                        task: 'loadMRP'
                    },
            failure: function(form, action) {
                if (action.result)
                    Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });
        tabPanel.setActiveTab(tab);
            },
            failure: function(form, action) {
                switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    Ext.Msg.alert('Failure', action.result.msg);
                }
            }
        });
    },
    deleteRecord: function(deleteBtn) {
        Ext.Msg.show({
            title: 'Delete MRP',
            scope: this,
            message: 'Are you sure you want to do this?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    Ext.Ajax.request({
                        url: '/index.php?option=com_mass',
                        params: {
                            id: deleteBtn.up('button').$widgetRecord.data.id,
                            task: 'removeMRP'
                        },
                        waitMsg: 'Deleting',
                        scope: this,
                        success: function() {
                            this.getView().down('massgrid').getStore().remove(deleteBtn.up('button').$widgetRecord);
                        }
                    });
                } else if (btn === 'no') {}
            }
        });
    },
    editRecord: function(btn) {

        var mrp_id = btn.up('button').$widgetRecord.data.id;

        var tabPanel = this.getView().down('tabpanel');

        if (!Ext.getCmp('mrp_' + mrp_id)) {
            tab = tabPanel.add({
                title: 'Edit MRP #' + mrp_id,
                mrp_id : mrp_id,
                id : 'mrp_' + mrp_id,
                reference : 'mrp_' + mrp_id,
                closable: true,
                tbar: [{
                    text: 'Save',
                    icon: 'resources/images/add.gif',
                    handler: 'saveMrp',
                    xtype: 'button'
                }, {
                    text: 'Cancel',
                    icon: 'resources/images/delete.gif',
                    handler: 'closeMrpFormTab',
                    xtype: 'button'
                },
                 {
                    text: 'Import MRP',
                    icon: 'resources/images/delete.gif',
                    handler: 'importMrp',
                    xtype: 'button'
                },
                {
                    text: 'Export PDF',
                    icon: 'resources/images/delete.gif',
                    handler: 'exportPdf',
                    xtype: 'button'
                }],
                layout: 'fit',
                items: [{
                    xtype: 'mrpformtabpanel'
                }]
            });
            tab.down('editmrpform').getForm().load({
                url: '/index.php?option=com_mass',
                waitMsg: 'Loading',
                params: {
                    id: mrp_id,
                    task: 'loadMRP'
                },
                failure: function(form, action) {
                    if (action.result)
                        Ext.Msg.alert("Load failed", action.result.errorMessage);
                }
            });
            tabPanel.setActiveTab(tab);
        } else {
            tabPanel.setActiveTab('mrp_' + mrp_id);
        }
    },
    refresh: function() {
        this.getView().getStore().load();
    },

    exportPdf : function()
    {

    window.location = 'http://www.thunkerbolt.com/components/com_mass/NET/mrp.ashx?method=&buildImages=&showImages=&mrp_id=' + this.getView().down('editmrpform').getForm().getValues().id;
    },

    importMrp: function()
    {
            Ext.create('Ext.Window', {
            width: 600,
            title: 'Import MRP',
            layout: 'fit',
            reference: 'importMrpWindow',
            items: [{
                xtype: 'form',
                layout: 'fit',
                bodyPadding: 10,
                reference: 'importMrpForm',
                items: [{

            xtype: 'filefield',
            emptyText: 'Select a File',
            name: 'mrpImportFile'

                }],
                buttons: [{
                    text: 'Save',
                    handler: 'uploadMrp'
                }]
            }]
        }).show();

        },

        uploadMrp : function()
        {
         var form = this.lookupReference('importMrpForm').getForm();

         mrp_id = this.getView().down('editmrpform').getForm().getValues().id;

        if (form.isValid()) {
            form.submit({
                scope: this,
                url: '/index.php?option=com_mass&task=uploadMRP',
                params: {
                mrp_id : mrp_id
                },
                waitMsg: 'Uploading your MRP file.',
                success: function(fp, o) {
                    var tpl = new Ext.XTemplate(
                        'File imported.<br />'
                    );

                    Ext.Msg.alert('Success', tpl.apply(o.result));


                    this.lookupReference('importMrpWindow').close();

                   this.getView().down('editmrpform').getForm().load({
            url: '/index.php?option=com_mass',
            waitMsg: 'Loading',
            params: {
                id: mrp_id,
                task: 'loadMRP'
            }
            });

                }
            });
            }
            },

    addNewRecord: function(scope) {
        Ext.create('Ext.Window', {
            width: 600,
            title: 'Add MRP',
            layout: 'fit',
            reference: 'addMrpWindow',
            items: [{xtype: 'form',
                layout: 'fit',
                bodyPadding: 10,
                labelWidth: '75px',
                reference: 'addMrpForm',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'MRP Title',
                    name: 'mrp_title'
                }]}],
                buttons: [{
        text: 'Save',
        handler: 'saveNewMrp'
    }]
        }).show();
    }
});

/*

    xtype: 'form',
                layout: 'fit',
                bodyPadding: 10,
                labelWidth: '75px',
                reference: 'addMrpForm',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'MRP Title',
                    name: 'mrp_title'
                }],

                */