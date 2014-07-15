Ext.define('Mass.view.main.AddMrpForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addmrpform',
    reference : 'addMrpForm',
    controller: 'main',
    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        name : 'mrp_title'
    }],
    buttons: [{
        text: 'Save',
        handler: 'saveNewMrp'
    }]
});
