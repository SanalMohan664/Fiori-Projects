/*global QUnit*/

sap.ui.define([
	"comapplexus/project2/controller/calculator.controller"
], function (Controller) {
	"use strict";

	QUnit.module("calculator Controller");

	QUnit.test("I should test the calculator controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
