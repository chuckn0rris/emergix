// JavaScript Document
Ext.form.NewHtmlEditor = Ext.extend(Ext.form.HtmlEditor, {
	 defaultValue: (Ext.isOpera || Ext.isIE6) ? '&nbsp;' : '&nbsp;',
	 initComponent : function(){
        Ext.form.NewHtmlEditor.superclass.initComponent.call(this);		
		this.plugins = [ new Ext.ux.form.HtmlEditor.Word(this) ];
	 },
	 
	/******************************************************************************************************
	*Extend the Editor for adding hidden div and binding a height updater function 
	*to the keyup / or any other event so that editor automatically update its height when that event will be fired 
	*********************************************************************************************************/								
	initEditor:function(){		
		Ext.form.NewHtmlEditor.superclass.initEditor.apply(this, arguments);
		this.addEvents('afterpaste');
		this.on('beforerender', this.addPlugins, this);
		//this.on('beforepush', this.markThisFieldAsNonDirty, this);
		this.createHiddenDiv();
		this.bindPasteEvent.defer(100, this);
		if(Ext.isIE){
			this.deferKeyBinding();
			this.on('beforesync', this.updateIframeHeight, this);
		}else{			
			this.on('beforesync', this.updateIframeHeight, this);
		}
	},
	
	addPlugins:function(){
		
	},
	
	/**
     * Protected method that will not generally be called directly. Pushes the value of the textarea
     * into the iframe editor.
     */
    pushValue : function(){		
        if(this.initialized){
            var v = this.el.dom.value;
            if(!this.activated && v.length < 1){
                v = this.defaultValue;
            }
            if(this.fireEvent('beforepush', this, v) !== false){
                this.getEditorBody().innerHTML = v;
				this.syncValue();
				this.originalValue = this.el.dom.value;
				//alert(this.originalValue +" :::: " + v);
                if(Ext.isGecko){
                    // Gecko hack, see: https://bugzilla.mozilla.org/show_bug.cgi?id=232791#c8
                    var d = this.doc;
					if(d){
						mode = d.designMode.toLowerCase();
						
						d.designMode = mode.toggle('on', 'off');
						d.designMode = mode;
					}
                }
                this.fireEvent('push', this, v);
            }
        }
    },

	
	/******************************************************************************************************
	* Call the KeyBinding after some intervel	
	* this function is only called for Internet explorer
	*********************************************************************************************************/
    deferKeyBinding : function(){
        this.KeyBinding.defer(100, this);
		this.focus.defer(100, this);
    },
	
	/******************************************************************************************************
	* set the field originalValue = current value so that it will not as dirty	
	*********************************************************************************************************/
	markThisFieldAsNonDirty:function(){
		//alert('markThisFieldAsNonDirty');
		this.originalValue = this.getValue();
		//alert(this.name+",  originalValue:"+this.originalValue+",  newvalue:"+this.getValue() );
	},
	
	/******************************************************************************************************
	* Call the syncValue after some intervel	
	*********************************************************************************************************/
    deferSyncValue : function(){		
        this.syncValue.defer(2, this);
		(function(){
			this.fireEvent('afterpaste', this);
		}).defer(4, this);		
    },
	
	/******************************************************************************************************
	* Binds the paste event to the deferSyncValue function
	*********************************************************************************************************/
	bindPasteEvent:function(){
		if(Ext.isIE){
			this.wrap.dom.childNodes[3].contentWindow.document.body.onpaste = this.deferSyncValue.createDelegate(this);
		}else{
			this.wrap.dom.childNodes[3].contentWindow.document.body.addEventListener('paste', this.deferSyncValue.createDelegate(this) , false );
		}
	},
	

    /******************************************************************************************************
	* Binds the key down event to the updateIframeHeight function
	* this function is only called for Internet explorer
	*********************************************************************************************************/
    KeyBinding : function(){		
		var iframeBody = Ext.get(this.wrap.dom.childNodes[3].contentWindow.document.body);		
		iframeBody.setStyle({'overflow-y': 'hidden'});
		iframeBody.setStyle({'min-height': '100px'});
		this.wrap.dom.childNodes[3].contentWindow.document.onkeyup = this.updateIframeHeight.createDelegate(this);
    },
	
	/******************************************************************************************************
	*Create the hidden div element which will be used to measure the height of the entered text in the editor
	*********************************************************************************************************/
	createHiddenDiv:function(){
		var iframe = Ext.get(this.iframe);
		iframe.setStyle({'overflow-y': 'hidden'});
		//iframe.setStyle({'overflow-x': 'scroll'});
		iframe.setStyle({'min-height': '100px'});
		if(Ext.isIE){
			var cls = 'NewHtmlEditorHiddenDivIE';
		}else{
			var cls = 'NewHtmlEditorHiddenDiv';
		}
		if(!this.hiddenDiv){
			this.hiddenDiv = this.wrap.createChild({
				html: '',
				cls: cls
			}, this.el);								
			this.hiddenDiv.setStyle({position:'absolute', top:'-1000000000000px', border:'1px solid #ff0000' });
		}		
	},
	
	/******************************************************************************************************
	*This function is responsible for updation of height of the editor.
	*It picks the conent of editor. Measure the height of picked content by pasting them in the hidden div
	*then apply the measured height to the editor
	*********************************************************************************************************/
	updateIframeHeight:function( ){		
		try{
			if(!this.width){
				this.width = this.wrap.dom.childNodes[3].scrollWidth-2;
			}
			var iframeBody  = Ext.get(this.wrap.dom.childNodes[3].contentWindow.document.body);	
			
			this.hiddenDiv.setStyle({'font-family': iframeBody.getStyle('font-family')});
			this.hiddenDiv.setStyle({'font-size': iframeBody.getStyle('font-size')});
			this.hiddenDiv.setStyle({'padding': iframeBody.getStyle('padding')});
			this.hiddenDiv.setStyle({'width': this.width+'px'});
			var iframeHeight = this.hiddenDiv.dom.scrollHeight;
			if(this.height &&  iframeHeight < this.height){
				iframeHeight  = this.height;
			}
			this.hiddenDiv.dom.innerHTML = this.iframe.contentWindow.document.body.innerHTML;						
			var iframe = Ext.get(this.iframe);
			if(Ext.isIE && this.hiddenDiv.dom.scrollHeight < 100){
				this.hiddenDiv.dom.scrollHeight = 100;
			}
			iframe.setStyle({height: iframeHeight+'px'});
		}catch(e){
		}finally{
			return true;
		}
	}	
});

Ext.reg('newhtmleditor', Ext.form.NewHtmlEditor);

Ext.override(Ext.form.NewHtmlEditor, {
	enableFont:false,
    enableFontSize:false,
	enableLinks:false,
	enableColors:false,
	enableAlignments:false,
	enableSourceEdit :true
});