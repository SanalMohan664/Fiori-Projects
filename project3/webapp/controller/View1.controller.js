sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models) {
        "use strict";

        return Controller.extend("com.applexus.project3.controller.View1", {
            onInit: function () {
                let oModel1 = models.loadData1("../model/data.json");
                let oModel2 = models.loadData1("../model/data2.json");
                this.getView().setModel(oModel1);
                this.getView().setModel(oModel2,"data2");
                console.log(oModel1)
                console.log(oModel2)
            },
            onPress: function(event){
                if(event.getSource().getPressed()){
                    this.getView().byId("nameInput").bindValue('/EmployeeInfo/0/Name');
                    this.getView().byId("ageInput").bindValue('/EmployeeInfo/0/Age');
                    this.getView().byId("departmentInput").bindValue('/EmployeeInfo/0/Department');
                    this.getView().byId("companyInput").bindValue('/EmployeeInfo/0/Company');
                }
                else{
                    this.getView().byId("nameInput").bindValue('data2>/EmployeeInfo/1/Name');
                    this.getView().byId("ageInput").bindValue('data2>/EmployeeInfo/1/Age');
                    this.getView().byId("departmentInput").bindValue('data2>/EmployeeInfo/1/Department');
                    this.getView().byId("companyInput").bindValue('data2>/EmployeeInfo/1/Company');
                }
            }
        });
    });
