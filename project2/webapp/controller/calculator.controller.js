sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.project2.controller.calculator", {
            onInit: function () {

            },
            onPressDisplay: function(val){
                this.getView().byId("result").setValue( this.getView().byId("result").getValue() + val );
            },
            onPressResult: function(){
                let x = this.getView().byId("result").getValue();
                this.getView().byId("result").setValue(Function("return " + x)());
            },
            onPressClear: function(){
                this.getView().byId("result").setValue("");
            }
        });
    });
