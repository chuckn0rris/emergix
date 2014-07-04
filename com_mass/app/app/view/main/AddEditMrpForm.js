Ext.define('Mass.view.main.AddEditMrpForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addeditmrpform',
    controller: 'main',
    bodyPadding: 10,
    viewModel: {
        type: 'main'
    },
    frame: true,
    height: 200,
    width: 460,
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
