Ext.define('Mass.view.main.EditMrpForm', {
    extend: 'Ext.form.Panel',
    xtype: 'editmrpform',
    controller: 'main',
    requires: [
        'Ext.layout.container.Column',
        'Ext.layout.container.Form',
        'Ext.form.field.Hidden',
        'Ext.form.field.Trigger'
    ],

    bodyPadding: 10,
    items: [{
        xtype: 'hidden',
        name: 'id'
    }, {
        xtype: 'fieldset',
        cls: 'mass-editmrpform-fieldset-title',
        title: 'Tracking Numbers',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            flex: 3,
            padding: 5,
            fieldLabel: 'Assisting State Emergency Management Mission Reference Number',
            labelAlign: 'top',
            name: 'mrp_stateema_tn'
        }, {
            xtype: 'textfield',
            flex: 2,
            padding: 5,
            fieldLabel: 'Resource Provider Tracking Number',
            labelAlign: 'top',
            name: 'mrp_rp_tn'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Resource Information and Location:',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'MRP Title',
            labelAlign: 'top',
            name: 'mrp_title'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Resource Provider/Agency Name',
            labelAlign: 'top',
            name: 'mrp_rpa_name'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Address 1:',
            labelAlign: 'top',
            name: 'mrp_rpa_address1'
        }, {
            xtype: 'textfield',
            padding: '0 0 5 0',
            fieldLabel: 'Address 2',
            labelAlign: 'top',
            name: 'mrp_rpa_address2'
        }, {
            xtype: 'fieldcontainer',
            padding: '5 0',
            fieldLabel: '',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'textfield',
                flex: 3,
                padding: '0 20 5 0',
                fieldLabel: 'City',
                labelWidth: 50,
                name: 'mrp_rpa_city'
            }, {
                xtype: 'combobox',
                flex: 1,
                padding: '0 20 5 0',
                fieldLabel: 'State',
                labelWidth: 50,
                name: 'mrp_rpa_state'
            }, {
                xtype: 'textfield',
                flex: 2,
                padding: '0 0 5 0',
                fieldLabel: 'Zip',
                labelWidth: 50,
                name: 'mrp_rpa_zip'
            }]
        }]
    }, {
        xtype: 'fieldset',
        padding: 5,
        title: 'Resource GPS Location',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            flex: 2,
            padding: '0 20 0 0',
            fieldLabel: 'Longitude',
            labelWidth: 60,
            name: 'mrp_longtidue',
            growMax: 400
        }, {
            xtype: 'textfield',
            flex: 2,
            padding: '',
            fieldLabel: 'Latitude',
            labelWidth: 60,
            name: 'mrp_latitude',
            growMax: 400
        }]
    }, {
        xtype: 'fieldset',
        layout: 'column',
        title: 'Resource Point of Contact',
        items: [{
            columnWidth: 0.33,
            defaults: {
                xtype: 'textfield',
                padding: '0 20 5 0'
            },
            items: [{
                fieldLabel: 'First Name',
                name: 'mrp_poc_first_name'
            }, {
                fieldLabel: 'Last Name',
                name: 'mrp_poc_last_name'
            }]
        }, {
            columnWidth: 0.33,
            defaults: {
                xtype: 'textfield',
                padding: '0 20 5 0'
            },
            items: [{
                fieldLabel: 'Phone',
                name: 'mrp_poc_phone'
            }, {
                fieldLabel: 'Mobile',
                name: 'mrp_poc_mobile'
            }]
        }, {
            columnWidth: 0.33,
            defaults: {
                xtype: 'textfield',
                padding: '0 20 5 0'
            },
            items: [{
                fieldLabel: '24-hr Phone',
                name: 'mrp_poc_24hour_phone'
            }, {
                fieldLabel: 'Email',
                name: 'mrp_poc_email'
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: 'NIMS Tier 1 Criteria',
        items: [ {
            xtype: 'button',
            text: 'MyButton'
        }]
    },
    {
        xtype: 'fieldset',
        title: 'Emergency Support Functions (ESFs) Supported',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'checkboxgroup',

            fieldLabel: '',
            defaults: {
                xtype: 'checkboxfield',
                padding: '0 20 5 0'
            },
            columns: 2,
            items: [{
                name: 'mrp_esf1',
                inputValue: 'ESF-1: Transportation',
                boxLabel: 'ESF-1: Transportation'
            }, {
                name: 'mrp_esf2',
                inputValue: 'ESF-2: Communications',
                boxLabel: 'ESF-2: Communications'
            }, {
                name: 'mrp_esf3',
                inoutValue: 'ESF-3: Public Works & Engineering',
                boxLabel: 'ESF-3: Public Works & Engineering'
            }, {
                name: 'mrp_esf4',
                inputValue: 'ESF-4: Firefighting',
                boxLabel: 'ESF-4: Firefighting'
            }, {
                name: 'mrp_esf5',
                inputValue: 'ESF-5: Emergency Management',
                boxLabel: 'ESF-5: Emergency Management'
            }, {
                name: 'mrp_esf6',
                inputValue: 'ESF-6: Mass Care, Emergency Assistance, Housing, Human Services',
                boxLabel: 'ESF-6: Mass Care, Emergency Assistance, Housing, Human Services'
            }, {
                name: 'mrp_esf7',
                inoutValue: 'ESF-7: Logistics Management and Resource Support',
                boxLabel: 'ESF-7: Logistics Management and Resource Support'
            }, {
                name: 'mrp_esf8',
                inputValue: 'ESF-8: Public Health & Medical Services',
                boxLabel: 'ESF-8: Public Health & Medical Services'
            }, {
                name: 'mrp_esf9',
                inputValue: 'ESF-9: Search & Rescue',
                boxLabel: 'ESF-9: Search & Rescue'
            }, {
                name: 'mrp_esf10',
                inputValue: 'ESF-10: Oil & Hazardous Materials Response',
                boxLabel: 'ESF-10: Oil & Hazardous Materials Response'
            }, {
                name: 'mrp_esf11',
                inputValue: 'ESF-11: Argiculture & Natural Resources',
                boxLabel: 'ESF-11: Argiculture & Natural Resources'
            }, {
                name: 'mrp_esf12',
                inputValue: 'ESF-12: Energy',
                boxLabel: 'ESF-12: Energy'
            }, {
                name: 'mrp_esf13',
                inputValue: 'ESF-13: Public Safety & Security',
                boxLabel: 'ESF-13: Public Safety & Security'
            }, {
                name: 'mrp_esf14',
                inputValue: 'ESF-14: Long-Term Community Recovery',
                boxLabel: 'ESF-14: Long-Term Community Recovery'
            }, {
                name: 'mrp_esf15',
                boxLabel: 'ESF-15: External Affairs',
                boxLabel: 'ESF-15: External Affairs'
            }]
        }]
    },
    {
        xtype: 'fieldset',
        layout: 'vbox',
        padding: 5,
        title: 'Capabilities, Description, Limitations, and Other Details',
        items: [{

            items: [{
                xtype: 'textareafield',
                labelAlign: 'top',
                fieldLabel: 'Mission Capabilities',
                name: 'mrp_mission_capabilities',
                width: "100%"
            }, {
                xtype: 'textareafield',
                labelAlign: 'top',
                fieldLabel: 'Detailed Resource Description',
                name: 'mrp_resource_description',
                width: "100%"
            }, {
                xtype: 'textareafield',
                labelAlign: 'top',
                fieldLabel: 'Identify any transportation requirements',
                name: 'mrp_transportation_requirement',
                width: "100%"
            }]
        }, {

            items: [{
                xtype: 'triggerfield',
                labelAlign: 'top',
                fieldLabel: 'Resource is (Fixed or Mobile)',
                name: 'mrp_resource_mobility',
                width: "100%"
            }, {
                xtype: 'textareafield',
                labelAlign: 'top',
                fieldLabel: 'Space and Size Requirements',
                name: 'mrp_space_size_requirements',
                width: "100%"
            }, {
                xtype: 'textareafield',
                labelAlign: 'top',
                fieldLabel: 'Limiting Factors',
                name: 'mrp_limiting_factors',
                width: "100%"
            }]
        }, {

            items: [{
                xtype: 'textareafield',
                fieldLabel: 'Logistical Support Needed',
                labelAlign: 'top',
                width: '100%',
                name: 'mrp_logistical_support'
            }]
        }]
    },


    {
                xtype: 'fieldset',
                title: 'Deployment Timeline',
                layout : 'vbox',
                items: [{
                    xtype: 'numberfield',
                    width: "100%",
                    fieldLabel: 'Hours from notification until ready for deployment (N+)',
                    labelAlign: 'top',
                    name: 'mrp_deployment_timeline'
                }]
            },

     {
        xtype: 'fieldset',
        layout: 'vbox',
        title: 'Personnel',
        padding: 5,
        items: [{
            xtype: 'textareafield',
            fieldLabel: 'List personnel by type (if applicable)',
            labelAlign: 'top',
            name: 'mrp_personnel_types',
            width: "100%"
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Identify the minimum licenses or certificates carried by the personnel on the mission',
            labelAlign: 'top',
            name: 'mrp_minimal_licenses_certification',
            width: "100%"
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Requirements for rotation of personnel',
            labelAlign: 'top',
            name: 'mrp_personnel_rotation_requirements',
            width: "100%"
        }]
    }, {
        xtype: 'fieldset',
        layout: 'vbox',
        title: 'Equipment',
        items: [{
            xtype: 'fieldcontainer',
            width: "100%",
            layout: 'hbox',
            defaults: {
                padding: 5,
                labelWidth: 250
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Number of fuel consuming equipment',
                name: 'mrp_number_of_fuel_consuming_equipment',
                flex: 1
            }, {
                xtype: 'textfield',
                fieldLabel: 'Number of non-fuel consuming equipment',
                name: 'mrp_number_of_non_fuel_consuming_equipment',
                flex: 1
            }]
        }, {
            xtype: 'textareafield',
            fieldLabel: 'List equipment requirements',
            labelAlign: 'top',
            name: 'mrp_equipment_requirements',
            width: "100%"
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Identify the type of property (expendable, accountable, or sensitive)',
            labelAlign: 'top',
            name: 'mrp_property_type',
            width: "100%"
        }, {
            xtype: 'textareafield',
            width: "100%",
            fieldLabel: 'Identify any maintenance or rehabilitation requirements needed for this equipment',
            labelAlign: 'top',
            name: 'mrp_equipment_mrr',
            width: "100%"
        }]
    }]
});
