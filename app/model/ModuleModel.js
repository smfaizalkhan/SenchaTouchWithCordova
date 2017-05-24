Ext.define("MobileApp.model.ModuleModel", {
extend: "Ext.data.Model",
config: {
fields: [
{ name: "applicant", type: "string" },
{ name: "beneficiary", type: "string" },
{ name: "currency_code", type: "string" }
]
}
});