Ext.define('MobileApp.view.ListView', {
	extend: 'Ext.NavigationView',
	xtype: 'listView',

	logLevel: 'debug',

	requires: [
		'Ext.tab.Panel'
	],
       config:{
        id: 'listView',
       	items: [{
       		xtype : 'moduleList',
       		title : 'ModulesName'
       	}],
      
       }
	
});