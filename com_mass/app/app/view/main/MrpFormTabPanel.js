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
        items: []
    },
    {
        title: 'Personnel',
        items: []
    },
    {
        title: 'Equipment',
        items: []
    },
    {
        title: 'Commodities',
        items: []
    },
    {
        title: 'Other',
        items: []
    },
    {
        title: 'Cost Totals',
        items: []
    }]
});