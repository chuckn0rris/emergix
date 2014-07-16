Ext.define('Mass.view.main.CostTotalsForm', {
    extend: 'Ext.form.Panel',
    xtype: 'costtotalsform',
    controller: 'main',
    requires: [
        'Ext.layout.container.Column',
        'Ext.layout.container.Form',
        'Ext.form.field.Hidden',
        'Ext.form.field.Trigger'
    ],

    bodyPadding: 10,
    
      items: [
                                {
                                    xtype: 'fieldset',
                                    defaults : {
    
    labelAlign: 'top'
    
    },
                                    padding: '',
                                    layout: 'column',
                                    title: 'Total Mission Ready Package Estimated Costs',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Travel',
                                            name: 'mrp_travel_estimated_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Personnel',
                                            name: 'mrp_personnel_estimated_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Equipment',
                                            name: 'mrp_equipment_estimated_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Commodities',
                                            name: 'mrp_commodity_estimated_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Other',
                                            name: 'mrp_others_estimated_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total MRP Cost Estimate',
                                            name: 'mrp_total_cost_estimate'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                     defaults : {
    
    labelAlign: 'top'
    
    },
                                    layout: 'column',
                                    title: 'Mission Ready Package Estimated Daily Cost',
                                    items: [
                                        {
                                            xtype: 'label',
                                          
                                            text: 'Note:  Estimated daily costs are generated below upon entering the Total Number of Estimated Mission Days.  Daily costs are only approximations and may not accurately reflect mission realities as travel costs may not be entered or the MRP may be out of date.'
                                        },
                                        {
                                            xtype: 'textfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Does the MRP contain travel costs?',
                                            name: 'mrp_contains_travel'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Estimated Number of Mission Days',
                                            name: 'mrp_est_mission_days'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total Estimated Daily Cost',
                                            name: 'mrp_est_daily_cost'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                     defaults : {
    
    labelAlign: 'top'
    
    },
                                    layout: 'column',
                                    title: 'Personnel Cost Totals',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: '# Personnel Assigned to Mission',
                                            name: 'mrp_personnel_assigned'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Daily Personnel Costs',
                                            name: 'mrp_personnel_daily_costs'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total Personnel Costs',
                                            name: 'mrp_personnel_total_costs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                     defaults : {
    
    labelAlign: 'top'
    
    },
                                    layout: 'column',
                                    title: 'Equipment Cost Totals',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Equipment by Quantity',
                                            name: 'mrp_equipment_quantity_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Equipment by Rate',
                                            name: 'mrp_equipment_rate_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total Equipment Costs',
                                            name: 'mrp_equipment_estimated_costs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                     defaults : {
    
    labelAlign: 'top'
    
    },
                                    layout: 'column',
                                    title: 'Other Cost Totals',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Other by Quantity',
                                            name: 'mrp_other_by_quantity_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Other by Rate',
                                            name: 'mrp_other_by_rate_total'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total Other Costs',
                                            name: 'mrp_other_estimated_total'
                                        }
                                    ]
                                    }
                                    ]
});
