Ext.define('MobileApp.view.DetailView', {
	extend: 'Ext.dataview.List',//'Ext.NavigationView',
	xtype: 'detailView',
	 /**,
	  * @requires //'Ext.dataview.List',
	  */

	 
	 requires: [
	 	'Ext.plugin.PullRefresh'
	 ],
	
  config :{
  	 plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Pull down for more new Tweets!'
            
        }
    ],
	title :'ModulesName',	
	store: 'moduleStore',
	itemId: 'detailView',
	itemTpl: '{applicant} : {beneficiary} : {currency_code}'	,


	items: [
                 {
                     xtype: 'toolbar',
                     docked: 'top',
                     
                     items: [
                         {
                             xtype: 'searchfield',
                             placeHolder: 'Search...',
                             itemId: 'searchBox',                            
                         }
                     ]
                 }
             ] 
	
  },
  
});