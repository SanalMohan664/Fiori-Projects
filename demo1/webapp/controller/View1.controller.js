sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.demo1.controller.View1", {
            onInit: function () {

            },
            onPress:function(){
                this.getView().byId("Input1").setValue(Math.floor(Math.random()*100))
                this.getView().byId("Input2").setValue(Math.floor(Math.random()*100))
                this.getView().byId("Input3").setValue(Math.floor(Math.random()*100))
                this.getView().byId("Input4").setValue(Math.floor(Math.random()*100))
            }
        });
    });
