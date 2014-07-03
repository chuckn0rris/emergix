
Ext.ux.mass.mrpGrid = function(conf) {


    if (!conf) {
        conf = {};
    }
    var config = {};

	config.grid = this;
	


    var GridReader = new Ext.data.JsonReader({
        totalProperty: 'total',
        successProperty: 'success',
        idProperty: 'id',
        root: 'data'
    }, [{
        name: 'id'
    },{
        name: 'mrp_title'
    }]);



    config.columns = [

   
       {
            xtype: 'actioncolumn',
            width: 75,
            items: [{
    icon : 'images/application_go.png',
    altText : 'Edit&nbsp;&nbsp;',
    tooltip : 'Edit this record',
      handler: function(grid, rowIndex, colIndex) {
      
      		 
    
           	grid.openRecord(rowIndex,grid);	
                    
    
    }
    }
    ,{
                    icon : 'images/application_delete.png',   
                    altText : 'Delete',            
                    tooltip: 'Delete this record',
                    handler: function(grid, rowIndex, colIndex) {
                    
                    rec = grid.store.getAt(rowIndex);		
		
                    
                        	Ext.MessageBox.confirm('Confirm', 'Are you sure?', 
				   function(btn, text){    
						if (btn == 'yes') {							
							grid.removeRecord(rec.data.id, grid);
						}
					}
				);	
                    }
    }]
    
                },
   
    {
        header: "ID",
        width: 50,
        sortable: true,
        dataIndex: 'id',

        filterInput: new Ext.form.TextField(),
        filterOptions: [{
            value: 'startwith',
            text: 'Start With'
        },{
            value: 'endwith',
            text: 'End With'
        },{
            value: 'contain',
            text: 'Contain'
        },{
            value: 'doesnotcontain',
            text: 'Does Not Contain'
        }]
    },{
        header: "Title",
        width: 225,
        sortable: true,
        dataIndex: 'mrp_title',
        filterInput: new Ext.form.TextField(),
        filterOptions: [{
            value: 'startwith',
            text: 'Start With'
        },{
            value: 'endwith',
            text: 'End With'
        },{
            value: 'contain',
            text: 'Contain'
        },{
            value: 'doesnotcontain',
            text: 'Does Not Contain'
        }]
    }];


    config.reloadGrid = false;
    
    var gridView = new Ext.grid.GridView({

    getRowClass: function(r) {},
 
  
        nearLimit: Ext.ux.mass.settings.nearLimit,
        loadMask: {
            msg: 'Buffering. Please wait...'
        }
    });
    config.store = new Ext.data.Store({
        reader: GridReader,
        autoLoad: true,
        remoteSort: true,
        bufferSize: Ext.ux.mass.settings.bufferSize,
        url: 'index.php?option=com_mass&task=mrpGrid',
    });
    
      config.store.on('beforeload', function() {
                mask.show();
                });

config.autoScroll = true;

    config.store.on('load', function() {
                mask.hide();
                });

    

    config.view = gridView;
    config.selModel = new Ext.grid.RowSelectionModel();

    config.border = false;
    Ext.apply(config, conf);
    
    
    config.tbar = {items: [{

        text: 'Refresh',
        iconCls: 'icon-refresh',
        gridStore: config.store,
        handler: function() {

            config.store.reload();
        }
        },
        {

        text: 'Add New MRP',
        iconCls: 'icon-add',
        gridStore: config.store,
        handler: function() {
         
        config.grid.addRecord();
         
        }
        }
        ]
        
    };
    Ext.apply(config, conf);
    Ext.apply(this, config);

/*
* explicitly call the superclass constructor
*/
    Ext.ux.mass.mrpGrid.superclass.constructor.call(this, config);
 
};


/*
* Extend the base class
*/
Ext.extend(Ext.ux.mass.mrpGrid, Ext.grid.GridPanel, {

    openRecord: function(rowIndex, activeTab) {
		var rec = this.store.getAt(rowIndex);		
		
        this.openForEditing(rec.data.id, rec.data.title,rec);
    },
    

   refreshGrid:function(){
		this.reloadGrid = true;	

		},
		
	removeRecord : function(mrp_id)
	{

		var grid = this;
		Ext.Ajax.request({
		  	url: 'index.php?option=com_mass&task=removeMRP&id='+ mrp_id,
		   	success: function(){
			   grid.store.reload();
			}
		});  
	},
		
addRecord:function(){


		
			this.editRecordWindow = new Ext.Window({
				resizable:false,
				modal:true,
				closeAction :'close',
				plain: true,
				width:450,					
				border:false,
				title:'Add New MRP',
			
				items:{
					xtype:'form',
					layout:'form',
					bodyStyle:'padding:10px',
					border:true,
					defaults:{width:250},
					items:[
				
					{
						xtype:'textfield',
						name:'mrp_title',
						
						fieldLabel:'Title'
					},
					{
						xtype:'panel',
						style:'padding:5px 0px 0px 105px',
						border:false,
						items:{
							xtype:'button',
							fieldLabel:'&nbsp;',							
							text:'Save',
							grid:this.grid,
							handler:function(){		
													
								this.form = this.grid.editRecordWindow.findByType('form')[0].form;	
								
									this.form.submit({
			url: 'index.php?option=com_mass',
			waitMsg: 'Please Wait...',
			
		params: {task: 'saveMRP',
		id: 0},
		
			success: function(form, action) {
			
			this.grid.store.reload();
			this.ownerCt.ownerCt.ownerCt.close();
	
			},
			failure: function(form, action) {
				Ext.Msg.alert(action.result.feedback, '');
			},
			scope: this
		});
								
															
							}
						}
					}]
				}
			});
		
		this.editRecordWindow.show();

	},
	
	
	openForEditing: function(id, tabtitle,rec) {

								
								
		var tabId = this.id + "course_" + id;
		
		var existingTab = this.mrpTabPanel.findById(tabId);
		if (existingTab) {
			this.mrpTabPanel.setActiveTab(tabId);
		} else {
			var mrpGrid = this;
	

 
			var tabs = [];
			
			this.mrpFormPanel = new Ext.ux.mass.mrpFormPanel({layout:'fit', mrp_id : id, mrpGrid : mrpGrid});



			var newTab = this.mrpTabPanel.add({
				title: tabtitle ? tabtitle : 'MRP #' + id,
				layout: 'fit',
				closable: true,
				border: false,
				id: tabId,
				listeners:{
				'beforeclose': function()
				{
				
			
			
				
				}
				},
				layoutOnTabChange: true,
				items:[{
					xtype:'tabpanel',

					 items:[ {
					      					tbar: {
					      					
					      					items:[
 { 
			text: 'Save',
			iconCls : 'icon-save',

			handler: function() {
			this.mrpFormPanel.submit();
			},
			scope:this
			}

			]},
					 autoScroll : true,
					 title:'MRP',
					 items: [this.mrpFormPanel]
		
					 }],
					 activeTab : 0}]
			});
			
			this.mrpTabPanel.setActiveTab(newTab.id);
			
		
			this.mrpFormPanel.loadMRP(id);
			
	
	
			
			
			
		}

	
	
	}
});