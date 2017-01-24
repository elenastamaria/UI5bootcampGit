sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	], function(Controller, MessageToast, JSONModel, ResourceModel) {"use strict";
		return Controller.extend("sap.ui.bootcampWebapp.controller.App", {
			
			onInit : function(){
				//set data model on view
				var oData = {
					field : {
						username : "Username",
						password : "Password"
					}
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
				
				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "sap.ui.bootcampWebapp.i18n.i18n"
				});
				this.getView().setModel(i18nModel, "i18n");
			},
			
			onLoginPress: function() {
				
				// var oUsername = this.getView().byId("username").getValue();
				// var oPass = this.getView().byId("password").getValue();
				// var defUsername = "Elaine";
				// var defPass = "ElainePass";
				
				// if(oUsername.length === 0 || oPass.length === 0){
				// 	MessageToast.show("Username must not be null");
				// }else if (oUsername.length < 6  || oUsername.length > 8 ){
				// 	MessageToast.show("Username must be 6 to 8 characters ONLY");
				// }else if (oPass.length < 7  || oPass.length > 10 ){
				// 		MessageToast.show("Password must be 7 to 10 characters ONLY");
				// }else if (oUsername !== defUsername || oPass !== defPass){
				// 		MessageToast.show("Invalid Username or Password");
				// }else{
				// 	MessageToast.show("Success!");
				// }
				
				//from i18n
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				//from JSON model
				var sRecipient = this.getView().getModel().getProperty("/field/username");
				var sPass = this.getView().getModel().getProperty("/field/password");
				var sMsg = oBundle.getText("helloMsg", [sRecipient], [sPass]);
				MessageToast.show(sMsg);
			}
	});

});