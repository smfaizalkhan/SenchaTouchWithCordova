Ext.define('MobileApp.controller.ListClickController', {
	extend: 'Ext.app.Controller',
	init:function(){
		console.log("In listClick Controller");
	},
	config:{
    control:{
			detailView:{
				itemtap:'onRecordTap'
			}
		},
		refs:{
			detailsView : '#detailView',
			listView : '#listView'
		}  
},
	onRecordTap:function(list, index, target, record, e, eOpts){
		console.log(list, index, target, record, e,eOpts);
		console.log('list is'+list)
		console.log('index is'+index)
		console.log('target is'+target)
		console.log('record is'+record.data.module)
		console.log('e is'+e)
		console.log('eOpts is'+eOpts)		
		console.log('view is '+this.getListView().self.getName())
		var me = this;
var nav = me.getListView();//getter method
 console.log('nav is'+nav);
//create model add data here we get the record from list's tap event. you can load store seperatly also
var model = Ext.create('MobileApp.model.ModuleModel', {
applicant: record.data.applicant,
beneficiary: record.data.beneficiary,
currency_code:record.data.currency_code
});
//create new detail view
var userdetailsView = Ext.create('MobileApp.view.ModulesView');
//set created model with data to newly create view
userdetailsView.setRecord(model);
//push this new view to main view
nav.push(userdetailsView);       
	}
});