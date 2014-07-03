Ext.define('Mass.view.main.AddMrpForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addmrpform',
    controller: 'main',
    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name'
    }],
    buttons: [{
        text: 'Save',
        handler: 'saveMrp'
    }]
});
