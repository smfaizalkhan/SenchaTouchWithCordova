Ext.define('MobileApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main', 
    /**
        * @requires Ext.TitleBar
        */
       requires: [
       	'Ext.TitleBar',
        'Ext.List'
       ],   
    config:{
          tabBarPosition :'bottom',
          
          items: [
            
            {
              title  :'ModulesListss',
              iconCls:'folder',
              layout :'fit', 
              items: [{
                 xtype:'listView'
              }],
            }
          ],

      }
});
