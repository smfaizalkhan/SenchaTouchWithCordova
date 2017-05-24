Ext.define('MobileApp.view.ModulesView', {
	extend: 'Ext.form.Panel',
	xtype: 'moduleView',
config: {
itemId: 'moduleDetail',
title: 'Module Details',
fullscreen: true,
items: [
{
xtype: 'textfield',
name: 'applicant',
label: 'Applicant',
disabled :true
},
{
xtype: 'textfield',
name: 'beneficiary',
label: 'Beneficiary',
disabled :true
},
{
xtype: 'textfield',
name: 'currency_code',
label: 'CurrencyCode',
disabled :true
}
]
}
});
