Ext.define('Mass.view.main.MrpFormTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mrpformtabpanel',

    controller: 'main',
    items: [{
        title: 'MRP',
        bodyPadding: 10,
        autoScroll: true,
        xtype: 'editmrpform'

    },
    {
        title: 'Travel',
        bodyPadding: 10,
        autoScroll: true,
        xtype: 'edittravelform'
    },
    {
        title: 'Personnel',
        layout: 'fit',
        items: [{
            xtype: 'personnelgrid'
        }]
    },
    {
        title: 'Equipment',
        layout: 'fit',
        items: [{
            xtype: 'equipmentgrid'
        }]
    },
    {
        title: 'Commodities',
        layout: 'fit',
        items: [{
            xtype: 'commoditiesgrid'
        }]
    },
    {
        title: 'Other',
        layout: 'fit',
        items: [{
            xtype: 'othergrid'
        }]
    },
     { title: 'Cost Totals',
        bodyPadding: 10,
        autoScroll: true,
        xtype: 'costtotalsform'
    }]
});