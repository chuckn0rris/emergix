
Ext.ux.mass.mrpFormPanel = Ext.extend(Ext.FormPanel,{
	
	 border:false,	 
     initComponent:function(config) {
			form = this;
			//Setup everything required for this form
			var storeStatus = new Ext.data.SimpleStore({
				fields	: ['value'],
				data	: [[''],['Open'],['Closed']]
			});
		


			Ext.apply( this, {
			
			 labelAlign: 'top',
        frame:true,
        title: '',
   
        bodyStyle:'padding:5px 5px 0',
        items: [{xtype: 'hidden',
        name: 'id',
        value: this.mrp_id
        
        },
        {
           
            items:[
            
            {
				xtype		: 'tabpanel',
				activeTab	: 0,
				border 		: false,
				deferredRender:true,
					items:[{
					xtype	: 'panel',
					title	: '...',
					layout	: 'fit',				
	
					ref			: '../mrpFormPanel',
					border 	: false, 
					items	:{
						xtype: 'panel',
						autoScroll:true,
						border:false,
						defaults:{
							border:false,
							cls:'margin'
						},
						items: [
						{
							xtype: 'panel',                                                
							title: 'MRP Information',
							frame: true,
							items: [{									
									columnWidth: 1,
									layout: 'form',
									items: [{
										xtype: "textfield",
										fieldLabel: "Title",
										name: 'mrp_title',
										anchor: '50%'
									}]
								}]
					}
					]
					}
					}
					]
			}
            
            ]
        },]});
			Ext.ux.mass.mrpFormPanel.superclass.initComponent.call(this);
	 
    },  
 

	
	/********
	* Loads the record into the form
	* @param {String} id The ID # of the request record.
	*********/
	loadMRP: function( id ){			
        this.getForm().load({
            url		: 'index.php?option=com_mass',
            params	: {		
                id		: id,
				task	: 'loadMRP'
            },
			waitMsg	: 'Loading...',
			success	: function( action, re ){
		
		  	},
			failure	: function( action, re ){
		
			}
       });																
	},
	

	
	/**
	* Submit the form
	* @param {Array} config An array of initialization items such as submission URL and parameters
	*/
	submit: function( config ){
	
		var  parentForm = this;		
		//Submit our form but on first save change it to update (success) if it was an insert operation
		this.getForm().submit({
			url: 'index.php?option=com_mass',
			params: {		

				task : 'saveMRP'
			},
			waitMsg: 'Saving Data...',								  
			success: function( f, a ){
				
				parentForm.mrpGrid.store.reload();
							
			}, 
			failure: function(f,a){ 
				try {
					var jsonData = Ext.util.JSON.decode(a.response.responseText);
					Ext.Msg.alert('Warning', jsonData.errors.first); 
				}catch (e) {}
			}
		});
	} });