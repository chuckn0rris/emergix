Ext.define('Mass.view.grid.PersonnelGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'personnelgrid',
    requires: [
        'Ext.grid.plugin.RowEditing'
    ],
    controller: 'main',
    store: 'Personnel',

    initComponent: function() {
        this.rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1
        });

        this.columns = [{
            dataIndex: 'id',
            text: 'ID',
            width: 50
        }, {
            dataIndex: 'first_name',
            text: 'First Name',
            flex: 1,
            editor: {
                allowBlank: false
            }
        }];

        this.tbar = [{
            text: 'Refresh',
            handler: 'refresh'
        }, {
            text: 'Add New Personnel',
            icon: 'resources/images/add.gif',
            scope: this,
            handler : function() {
                this.rowEditing.cancelEdit();

                // Create a model instance
                var r = Ext.create('Mass.model.Personnel', {
                    first_name: "Name"
                });

                this.getStore().insert(0, r);
                this.rowEditing.startEdit(0, 0);
            }
        }, {
            text: 'Remove Personnel',
            itemId: 'remove',
            icon: 'resources/images/add.gif',
            scope: this,
            handler: function() {
                var sm = this.getSelectionModel();
                this.rowEditing.cancelEdit();
                this.getStore().remove(sm.getSelection());
                if (this.getStore().getCount() > 0) {
                    sm.select(0);
                }
            },
            disabled: true
        }];

        this.on('selectionchange', function(view, records) {
            this.down('#remove').setDisabled(!records.length);
        }, this);

        this.plugins = [this.rowEditing];

        this.callParent();
    }

});
