Ext.define('MobileApp.view.ModuleList', {
	extend: 'Ext.List',
	xtype: 'moduleList',
	/**
     * @requires 
     */
    requires: [
        'Ext.List'
    ],
	config:{
    itemId: 'moduleList',
    itemTpl : '{module}',
    data: [
        { module: 'IMLC' },
        { module: 'IMCO' },
        { module: 'EXCO' },
        { module: 'GTEE' }
    ]  

	}

	
});