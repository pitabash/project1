sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project1.controller.View1", {
			onInit: function () {
                    this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            },
            goToView2 : function(){
                this.oRouter.navTo("RouteView2");
            },
            onPress : function(){
                var oView =  this.getView();
                oView.byId("fName").setValue("Pitabash");
                oView.byId("mName").setValue("Swain");
                oView.byId("lName").setValue("Mantu");
                oView.byId("company").setValue("WIPRO");
                oView.byId("phone").setValue("7504403690");
                oView.byId("email").setValue("pitabashswain2014@gmail.com");
                oView.byId("male").setSelected(true);
                oView.byId("date").setValue("2020-02-02");
                oView.byId("abap").setSelected(true);
                oView.byId("java").setSelected(true);
                oView.byId("textArea").setValue("Birakishorpr Goda 754110");
                oView.byId("combo").setSelectedKey("ctc");
            }
		});
	});
