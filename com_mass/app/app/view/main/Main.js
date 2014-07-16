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

    layout: 'fit',

    items: [{
        xtype: 'tabpanel',
        ui: 'navigation',
        plugins: 'responsive',
        tabBarHeaderPosition: 1,
        titleRotation: 0,
        tabRotation: 0,

        header: {
            layout: {
                align: 'stretchmax'
            },
            title: {
                text: 'MyApp',
                flex: 0
            },
            glyph: 61
        },

        tabBar: {
            flex: 1,
            layout: {
                align: 'stretch',
                overflowHandler: 'none'
            }
        },

        responsiveConfig: {
            tall: {
                headerPosition: 'top'
            },
            wide: {
                headerPosition: 'left'
            }
        },

        defaults: {
            tabConfig: {
                plugins: 'responsive',
                responsiveConfig: {
                    wide: {
                        iconAlign: 'left',
                        textAlign: 'left'
                    },
                    tall: {
                        iconAlign: 'top',
                        textAlign: 'center',
                        width: 120
                    }
                }
            }
        },

        items: [{
            title: 'View All MPRs',
            layout: 'fit',
            glyph: 72,
            items: [{
                xtype: 'tabpanel',
                itemId: 'mainTapPanel',
                reference: 'tabpanel',
                items:[{
                    title: 'View All MPRs',
                    xtype: 'massgrid',
                    reference: 'massgrid'
                }]
            }]
        }, {
            title: 'Users',
            glyph: 117,
            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            title: 'Groups',
            glyph: 85,
            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            title: 'Settings',
            glyph: 42,
            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    }]
});
