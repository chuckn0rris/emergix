

Ext.ux.mass.mainTabs= function(config){
	Ext.apply( this, config );	

           
   this.mrpPanel 			= new Ext.ux.mass.mrpPanel({});
   	

	var tabs = [{				
				height	: 600,
				autoScroll: true,
				items	: [{
					title	: 'Manage MRPs',
					layout	: 'fit',
					iconCls	: 'x-icon-tickets',
					
					style	: 'padding: 5px;' 
					,items	: [this.mrpPanel
					]
				}]
			}
			
			];
	
	
	this.items		= tabs;
	this.tabWidth	= 160;
    this.activeGroup= 0;
    this.renderTo = 'mainTabs';
    

   


	
	Ext.ux.mass.mainTabs.superclass.constructor.call(this);
};

Ext.extend(Ext.ux.mass.mainTabs, Ext.ux.GroupTabPanel, {});
