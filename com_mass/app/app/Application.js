/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Mass.Application', {
    extend: 'Ext.app.Application',

    name: 'Mass',

    views: [
        'grid.Grid',
        'grid.PersonnelGrid',
        'grid.EquipmentGrid',
        'grid.CommoditiesGrid',
        'grid.OtherGrid',
        'main.AddMrpForm'
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        'Mprs',
        'Personnel',
        'Equipment',
        'Commodities',
        'Other'
    ],

    launch: function () {
        // TODO - Launch the application
    },

    glyphFontFamily: 'Pictos'
});
