Ext.define('Mass.view.main.EditMrpForm', {
    extend: 'Ext.form.Panel',
    xtype: 'editmrpform',
    controller: 'main',
    bodyPadding: 10,
    frame: true,
    height: 200,
    width: 460,
    title: 'Edit MRP',
    items: [{
        xtype: 'textfield',
        anchor: '100%',
        fieldLabel: 'Title',
        name: 'title'
    }],
    buttons: [{
        text: 'Save',
        icon: 'resources/images/add.gif',
        handler: 'saveMrp'
    }, {
        text: 'Cancel',
        icon: 'resources/images/delete.gif',
        handler: 'closeMrpFormTab'
    }]
});
