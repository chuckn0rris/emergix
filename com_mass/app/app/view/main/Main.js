Ext.define('Mass.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'massviewport',

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
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
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
