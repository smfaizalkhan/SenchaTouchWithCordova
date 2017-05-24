Ext.define('MobileApp.store.ModuleStore', {
	extend: 'Ext.data.Store',
	xtype: 'moduleStore',
	
	config:{
		model : 'MobileApp.model.ModuleModel',
		autoLoad: false,        
		storeId: "moduleStore", 
       
		proxy: {
					type: 'ajax',
					actionMethods:  {create: "POST", read: "POST", update: "POST", destroy: "POST"},
					// url: 'http://192.168.1.37:8080/AlRajhiRest/rest/records',
				    // url: 'http://10.2.2.124:8080/AlRajhiRest/rest/records',
					url : 'http://192.168.0.103:8080/AlRajhiRest/rest/records',
						reader: {
						type: 'json'
 							}
   				}  	  
		}	


});