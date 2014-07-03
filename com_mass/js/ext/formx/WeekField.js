// JavaScript Document
Ext.WeekCalender= function(config){
	config = config || {};
	if(!config.id){
		this.id = Ext.id();	
	}
	this.width=590;
	this.bodyStyle ={border:'0px','z-index':'12000'};
	this.closable_ = false;
	this.y=100;
	this.resizable = false;
	this.height=175;
	this.border=false;
	this.bodyBorder= false;
	this.frame= false;
	this.closeAction= 'hide';
	this.dateCalenderDivIdPrefix = 'dateCalender';
	//alert("dateCalender"+this.id)
	this.items = new Ext.Panel({
			html :'<div id="cal"><div id="dateCalender'+this.id+'" ></div></div>'
	});
	//config.html ='<div id="cal"><p id="dateCalender'+config.id+'" ></p></div>';
	Ext.WeekCalender.superclass.constructor.call(this);	
	
};
Ext.extend(Ext.WeekCalender, Ext.Window,  {
	show : function(animateTarget, cb, scope){
        Ext.WeekCalender.superclass.show.call(this);
		if(!Ext.WeekCalender.EYE){
			Ext.WeekCalender.EYE =  true
			$(EYE.init);
		}
		var WeekCalender = this;
		//alert('#dateCalender'+this.id)
		if(!this.dateCalender){
			//var_dump(this)
			$('#dateCalender'+this.id).DatePicker({
				flat: true,
				date: [],
				format: 'm/d/Y',
				current: new Date(),
				calendars: 3,
				mode: 'range',
				starts: 1,
				onChange: function(formated,date) {
					//availabilityPanel.findById('selectedWeek').setValue(formated);
					WeekCalender.fireEvent('weekSelect', WeekCalender, formated,date);
				}			
			});
			this.dateCalender = true;			
		}
		this.toFront();
		this.focus();
	}
});

Ext.form.WeekField = Ext.extend(Ext.form.TriggerField,  {
	 readOnly:true,
	 format:'y-m-d',
	 // Provides logic to override the default TriggerField.validateBlur which just returns true
     validateBlur : function(){		
        if(!this.calender || !this.calender.isVisible()){
			return true;
		}	
     },
	 beforeBlur_:function(){
		 alert('beforeBlur')
	 },
	 setValue : function(Value){
        return Ext.form.WeekField.superclass.setValue.call(this, Value );
     },

    // private
    parseDate : function(value){
        if(!value || Ext.isDate(value)){
            return value;
        }
        var v = Date.parseDate(value, this.format); 
		alert(this.format)
        return v;
    },
	hideCalender:function(){
		  Ext.getDoc().un('mousewheel', this.collapseIf, this);
          Ext.getDoc().un('mousedown', this.collapseIf, this);
		  this.calender.hide();
	},
	onWeekCalender:function(WeekCalender, formated,date){
		  this.hideCalender();
		  this.setValue(formated[0]+","+formated[1]);
		 
	 },
	 onTriggerClick : function(){
        if(this.calender == null){
            this.calender = new Ext.WeekCalender({});
			this.calender.on('weekSelect', this.onWeekCalender, this);			
        }
		Ext.getDoc().on({
			scope: this,
			mousewheel: this.collapseIf,
			mousedown: this.collapseIf
		});
        //this.onFocus();        
        //this.menu.picker.setValue(new Date());
        this.calender.show();
		this.calender.getEl().alignTo(this.el, "tr-br?");       
    },
	 // private
    collapseIf : function(e){
		//var_dump(this.wrap);
        if(!e.within(this.wrap) && !e.within(this.calender.getEl())){
             this.hideCalender();
        }
    }
});
Ext.reg('weekfield', Ext.form.WeekField);