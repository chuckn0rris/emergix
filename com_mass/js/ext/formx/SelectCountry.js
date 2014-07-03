/** 
 * Copyright Intermesh
 * 
 * This file is part of Group-Office. You should have received a copy of the
 * Group-Office license along with Group-Office. See the file /LICENSE.TXT
 * 
 * If you have questions write an e-mail to info@intermesh.nl
 * 
 * @version $Id: SelectCountry.js 2680 2009-06-22 11:05:44Z mschering $
 * @copyright Copyright Intermesh
 * @author Merijn Schering <mschering@intermesh.nl>
 */
  
Ext.ux.membership.form.SelectCountry = function(config){

	if(!Ext.ux.membership.countriesStore)
	{
		var countries = [];

		for(var c in Ext.ux.membership.lang.countries)
		{
			countries.push([c, Ext.ux.membership.lang.countries[c]]);
		}

		Ext.ux.membership.countriesStore = new Ext.data.SimpleStore({
					fields: ['iso', 'name'],
					data : countries
			});
		Ext.ux.membership.countriesStore.sort('name');
	}
		
	Ext.apply(this, config);	

	Ext.ux.membership.form.SelectCountry.superclass.constructor.call(this,{
   	store: Ext.ux.membership.countriesStore,
		valueField: 'iso',
		displayField: 'name',
		triggerAction: 'all',
		editable: true,
		mode:'local',
		selectOnFocus:true,
		forceSelection: true,
		emptyText: Ext.ux.membership.lang.strNoCountrySelected
	});

}
 
Ext.extend(Ext.ux.membership.form.SelectCountry, Ext.form.ComboBox);