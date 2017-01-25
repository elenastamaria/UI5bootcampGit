sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.bootcampWebapp.controller.LoginPanel", {
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
				var sMsg = oBundle.getText("helloMsg", [sRecipient, sPass]);
				MessageToast.show(sMsg);
			},
			
			_getDialog : function () {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("sap.ui.bootcampWebapp.view.LoginDialog");
					this.getView().addDependent(this._oDialog);
				}
				return this._oDialog;
			},
			
			onOpenDialog : function () {
				this._getDialog().open();
			}
	});
});
