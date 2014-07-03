
Ext.ux.mass.mrpPanel = function(config){


    if(!config){
        config = {};
    };

    this.mrpGrid = mrpGrid = new Ext.ux.mass.mrpGrid({
        autoScroll  : true,
        region    : 'center',
        split   : true,
        event_id  : config.event_id
    });


    this.mrpTabPanel = mrpTabPanel = new Ext.TabPanel({
        region    : 'center',
        autoScroll  : true,
        border    : false,
        items     : [{
        iconCls : 'icon-back',
            title   : 'View All MRPs',
            xtye    : 'panel',
            layout    : 'border',
            autoScroll  : false,

            deferredRender:false
            ,items    : this.mrpGrid,
            listeners :  {
                show: function() {



                if (rrDirtyGrid)
                    {


                     this.mrpGrid.store.reload();
                     rrDirtyGrid = false;

                }
                },
                scope: this
                }
         }],

        event_id  : config.event_id,
        activeTab : 0
    });
    this.mrpGrid.mrpTabPanel = this.mrpTabPanel;

    function formatDate(val){
        if(val && val.indexOf('-')!=-1){
            var val_array = val.split('-');
            return val_array[1]+'/'+val_array[2] +'/'+ val_array[0];
        }
        return "";
    }

    config.items = this.mrpTabPanel;


    config.layout='fit';
    /*
     * Explicitly call the superclass constructor
     */
    Ext.ux.mass.mrpPanel.superclass.constructor.call(this, config);

}

/*
 * Extend the base class
 */
Ext.extend(Ext.ux.mass.mrpPanel, Ext.Panel, {});
