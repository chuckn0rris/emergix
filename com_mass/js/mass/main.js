
Ext.ns('Ext.ux.mass');
Ext.ux.mass.form = {};
Ext.ux.mass.settings={url:'index.php?option=com_mass'};
var mainTabs = null;





		var rrDirtyGrid = false;

					var mask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
                    



  function parseDate(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
        date = new Date(NaN), month,
        parts = isoExp.exec(dateStringInRange);

    if(parts) {
      month = +parts[2];
      date.setFullYear(parts[1], month - 1, parts[3]);
      if(month != date.getMonth() + 1) {
        date.setTime(NaN);
      }
    }
    return date;
  }

                
Ext.onReady(function(){


Ext.QuickTips.init();



	mainTabs = new Ext.ux.mass.mainTabs( { } );
	
	                  



            

		
	new Ext.Viewport({
		layout: 'border',
		items: [{
			region	: 'north',     
			border	: true,			
			height	: 50,
			
			items	: [new Ext.Panel({ 
				el: 'headerPanel'
				    
			})]
		}, {
			region	: 'center',
			layout	: 'fit',
			xtype	: 'panel',
			items	: mainTabs 
		}],
		listeners:{
			afterRender:function(){
			
	

			}	
		}
	});
	
	
});