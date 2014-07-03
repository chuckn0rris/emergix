
Ext.ns('Ext.ux.form');

Ext.ux.form.MultiSelectCheckBox = Ext.extend(Ext.ux.form.MultiSelect,  {
  
   
    // private
    onRender: function(ct, position){
        Ext.ux.form.MultiSelect.superclass.onRender.call(this, ct, position);

        var fs = this.fs = new Ext.form.FieldSet({
            renderTo: this.el,
            title: this.legend,
            height: this.height,
            width: this.width,
            style: "padding:0;",
            tbar: this.tbar,
            bodyStyle: 'overflow: auto;'
        });

        this.view = new Ext.ListView({
            multiSelect: true,
            store: this.store,
			cls:'multiSelectCheckBoxView',
			simpleSelect:true,
            columns: [{ header: 'Value', width: 1, dataIndex: this.displayField }],
            hideHeaders: true
        });

        fs.add(this.view);

        this.view.on('click', this.onViewClick, this);
        this.view.on('beforeclick', this.onViewBeforeClick, this);
        this.view.on('dblclick', this.onViewDblClick, this);

        this.hiddenName = this.name || Ext.id();
        var hiddenTag = { tag: "input", type: "hidden", value: "", name: this.hiddenName };
        this.hiddenField = this.el.createChild(hiddenTag);
        this.hiddenField.dom.disabled = this.hiddenName != this.name;
        fs.doLayout();
    }

});
Ext.reg('multiselectcheckbox', Ext.ux.form.MultiSelectCheckBox);
