Ext.define('Mass.view.main.EditTravelForm', {
    extend: 'Ext.form.Panel',
    xtype: 'edittravelform',
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
                                    defaults: {
                                    xtype: 'numberfield',
                                    hideTrigger:true
                                    },
                                    layout: 'column',
                                    title: 'Personal Vehicle Estimated Costs',
                                    items: [
                                        {
                                            xtype: 'label',
                                            padding: '\'0 20 5 0\'',
                                            text: 'Personal vehicle costs are calculated by mileage rates.  These may be the agency, state, or federal rate.  Whichever rate is used, should be consistent with the policy of the state. '
                                        },
                                        {	
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Mileage to Mission Location',
                                            labelAlign: 'top',
                                            name: 'mrp_pv_mileage'
                                        },
                                        {
                                         
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Mileage on Mission Site',
                                            labelAlign: 'top',
                                            name: 'mrp_pv_mission_site_mileage'
                                        },
                                        {
                                            
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Return Mileage',
                                            labelAlign: 'top',
                                            name: 'mrp_pv_return_mileage'
                                        },
                                        {
                                           
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Rate per Mile',
                                            labelAlign: 'top',
                                            name: 'mrp_pv_rate_per_mile'
                                        },
                                        {
                                           
                                            padding: '\'0 20 5 0\'',
                                            fieldLabel: 'Total Personal Vehicle',
                                            labelAlign: 'top',
                                            name: 'mrp_total_personal_vehicle_costs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    layout: 'column',
                                    title: 'Rental Vehicle Estimated Costs',
                                    defaults : {
                                    columnWidth:.25,
                                     xtype: 'numberfield',
                                    hideTrigger:true,
                                    padding: '\'0 20 5 0\''
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            columnWidth:1,
                                           padding: '\'0 20 5 0\'',
                                            text: 'Rental vehicle expenses include the rental rate and fuel.  Insurance coverage for rental vehicles is optional.  '
                                        },
                                        {
                                            
                                            fieldLabel: 'Vehicle Rental',
                                            labelAlign: 'top',
                                            name: 'mrp_rv_fee'
                                        },
                                        {
                                          
                                            fieldLabel: 'Insurance (optional)',
                                            labelAlign: 'top',
                                            name: 'mrp_rv_insurance'
                                        },
                                        {
                                           
                                            fieldLabel: 'Fuel (must submit receipts)',
                                            labelAlign: 'top',
                                            name: 'mrp_rv_total_fuel'
                                        },
                                        {
                                           
                                            fieldLabel: 'Total Rental Vehicle',
                                            labelAlign: 'top',
                                            name: 'mrp_rv_total_costs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    defaults : {
                                    columnWidth:.25,
                                     xtype: 'numberfield',
                                    hideTrigger:true,
                                    padding: '\'0 20 5 0\''
                                    },
                                    title: 'Government Vehicle Estimated Costs',
                                    items: [
                                        {
                                            xtype: 'label',
                                            
                                            text: 'Government vehicle costs should only list fuel.  If using a government vehicle mileage rate, it should be entered under equipment.'
                                        },
                                        {
                                            
                                            fieldLabel: 'Enter fuel costs:',
                                            labelAlign: 'top',
                                            name: 'mrp_gv_fuel_costs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    defaults : {
                                    columnWidth:.25,
                                     xtype: 'numberfield',
                                    hideTrigger:true,
                                    padding: '\'0 20 5 0\''
                                    },
                                    layout: 'column',
                                    title: 'Air Travel Estimated Costs',
                                    items: [
                                        {
                                            xtype: 'label',
                                            columnWidth: 1,
                                           
                                            text: 'Price of air ticket to/from mission site and additional fees (such as baggage).'
                                        },
                                        {
                                            
                                            fieldLabel: 'Cost for Air Travel Tickets',
                                            labelAlign: 'top',
                                            name: 'mrp_at_cost'
                                        },
                                        {
                                           
                                            fieldLabel: 'Additional Fees',
                                            labelAlign: 'top',
                                            name: 'mrp_at_additional_fee'
                                        },
                                        {
                                            
                                            fieldLabel: 'Total Air Travel',
                                            labelAlign: 'top',
                                            name: 'mrp_at_total'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Meals Estimated Costs',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                           
                                            text: 'Meals may be calculated by expense or by per diem.  While traveling to and from or while on a mission, per diem rates may change.  Use a different row to note changes in per diem rates.'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            fieldLabel: 'Total Meals and Tips by Expense: ',
                                            labelAlign: 'top',
                                            name: 'mrp_meals_expense'
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            title: 'Add Per Diem',
                                            columns: [
                                                {
                                                    xtype: 'rownumberer',
                                                    text: 'ID'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'Daily Per Diem Rate:'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: '# of Days @ Rate'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: '# Personnel'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'Total Per Diem @ Rate'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            fieldLabel: 'Total Estimated Per Diem per Day',
                                            labelAlign: 'top',
                                            name: 'mrp_meals_perdiem_day'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            fieldLabel: 'Total Estimated Mission Per Diem',
                                            labelAlign: 'top',
                                            name: 'mrp_meals_perdiem_day'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Lodging',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            
                                            text: 'Lodging can be input at per diem or actual costs.'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            fieldLabel: 'Total Estimated Lodging per Day',
                                            labelAlign: 'top',
                                            name: 'mrp_lodging_perday'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            fieldLabel: 'Total Estimated Mission Lodging',
                                            labelAlign: 'top',
                                            name: 'mrp_lodging_total',
                                            
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            title: 'My Grid Panel',
                                            columns: [
                                                {
                                                    xtype: 'rownumberer'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'Lodging Rate'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: '# Nights @ Lodging Rate'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: '# Rooms'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'Daily Total'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Parking Fees Estimated Costs',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            
                                            text: 'Parking may include hotel, airport, or lot fees.'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Total Estimated Parking',
                                            labelAlign: 'top',
                                            name: 'mrp_total_parking'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    layout: 'column',
                                    title: 'Shipment & Transportation',
                                    items: [
                                        {
                                            xtype: 'label',
                                            
                                            text: 'Costs for shipping and transporting equipment, commodities, and supplies to and from the mission site.'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            padding: '\'0 20 0 0\'',
                                            fieldLabel: 'Equipment',
                                            labelAlign: 'top',
                                            name: 'mrp_st_equipment'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Supplies',
                                            labelAlign: 'top',
                                            name: 'mrp_st_commodities'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Commodities',
                                            labelAlign: 'top',
                                            name: 'mrp_st_supplies'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Total Shipment & Transportation',
                                            labelAlign: 'top',
                                            name: 'mrp_st_total'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Notes and Comments',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textareafield',
                                            flex: 1,
                                            fieldLabel: 'Please enter any notes and comments for estimated travel costs',
                                            labelAlign: 'top',
                                            name: 'mrp_notes'
                                        }
                                    ]
                                }
                            
                        
    
    
    ]
    
});
