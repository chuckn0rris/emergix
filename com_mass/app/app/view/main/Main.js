Ext.define('Mass.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'massviewport',

        requires: [
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.XTemplate',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.TextArea',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.grid.column.Boolean',
        'Ext.toolbar.Toolbar',
        'Mass.view.main.EditMrpForm',
        'Mass.view.main.MrpFormTabPanel',
        'Mass.view.main.NavigationTabs',
        'Mass.view.main.EditTravelForm',
        'Mass.view.main.CostTotalsForm',
        'Mass.view.grid.PersonnelGrid',
        'Mass.view.grid.CommoditiesGrid',
        'Mass.view.grid.OtherGrid'
    ],



    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        width: 250,
        split: true
    }, {
        region: 'center',
        xtype: 'tabpanel',
        reference: 'tabpanel',
        items:[{
            title: 'View All MPRs',
            xtype: 'massgrid',
            reference: 'massgrid'
        }]
    }]
});
