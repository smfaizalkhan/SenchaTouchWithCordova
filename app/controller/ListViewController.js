Ext.define('MobileApp.controller.ListViewController', {
	extend: 'Ext.app.Controller',
	init:function(){
		console.log('Controller inititated')
	},
	config:{
		control:{
			moduleList:{
				itemtap:'onModuleTap'
			}
		},

		refs:{
			listView : '#listView',
		}  
		
	},
	onModuleTap:function(list, index, target, record, e, eOpts){
		console.log(list, index, target, record, e,eOpts);
		console.log('list is'+list)
		console.log('index is'+index)
		console.log('target is'+target)
		console.log('record is'+record.data.module)
		console.log('e is'+e)
		console.log('eOpts is'+eOpts)
        console.log('view is '+this.getListView().self.getName())
        var progressIndicator = Ext.create('Ext.ProgressIndicator');
		//progressIndicator.setLoadingText('Request Processing');
		progressIndicator.show();
		var nav = this.getListView();	
		var store = Ext.create('MobileApp.store.ModuleStore');
		store.getProxy().setExtraParam('id',record.data.module)			
		console.log('store.getParams'+store.getProxy().getReader());
				store.load({
		   callback : function(record, operation)
			{
		//always
		console.log(operation.request.scope.reader.rawData.details);
				},
		   
		});   
		//store.losd
		progressIndicator.hide();	

        var viewtoBePushed = Ext.create('MobileApp.view.DetailView')         
        nav.push(viewtoBePushed);

     /* Ext.Ajax.request({
       	url : 'http://10.2.2.88:8080/AlRajhiRest/rest/records',
       	params: {
        id: record.data.module
        },
       	success:function(response){        
      // 	console.log('server response'+response.responseText);                
		var store = Ext.create('MobileApp.store.ModuleStore');
		store.setData(response.responseText);	
		//store.setProxy('ajax');
		store.setParams(record.data.module)
		console.log('store.getProxy'+store.getParams());
		//store.losd
		progressIndicator.hide();		
        var viewtoBePushed = Ext.create('MobileApp.view.DetailView')         
        nav.push(viewtoBePushed);
       	}
       })*/
	}
   
});