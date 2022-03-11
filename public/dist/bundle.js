/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Person_1 = __webpack_require__(/*! ./class/Person */ \"./src/class/Person.ts\");\nconst Tax_1 = __webpack_require__(/*! ./class/Tax */ \"./src/class/Tax.ts\");\nconst t = new Tax_1.Tax(0, Person_1.status.single, 0);\nconst t2 = new Tax_1.Tax(400000, Person_1.status.single, 18000);\nconsole.log('hello world');\nconsole.log(\"-----------------------\");\nconsole.log(\"wife\");\nt.countTotalAllowance();\nt.countTotalDeduction();\nt.countNetChargeableIncome();\nt.checkStandardRate();\nt.calculatePayableTax();\nconsole.log('before tax reduction : ', t.getPayableTax());\nt.taxReduction();\nconsole.log('after tax reduction : ', t.getPayableTax());\nconsole.log(\"-----------------------\");\nconsole.log(\"Husband\");\nt2.countTotalAllowance();\nt2.countTotalDeduction();\nt2.countNetChargeableIncome();\nt2.checkStandardRate();\nt2.calculatePayableTax();\nconsole.log('before tax reduction : ', t2.getPayableTax());\nt2.taxReduction();\nconsole.log('after tax reduction : ', t2.getPayableTax());\nconsole.log(\"-----------------------\");\nconsole.log(\"Joint\");\nconst joint = new Tax_1.Tax(t.income + t2.income, Person_1.status.married, t.mpfRate + t2.mpfRate);\njoint.countTotalAllowance();\njoint.countTotalDeduction();\njoint.countNetChargeableIncome();\njoint.checkStandardRate();\njoint.calculatePayableTax();\njoint.getPayableTax();\nconsole.log('before tax reduction : ', joint.getPayableTax());\njoint.taxReduction();\nconsole.log('after tax reduction : ', joint.getPayableTax());\nconsole.log(\"-----------------------\");\n\n\n//# sourceURL=webpack://305_pair/./src/app.ts?");

/***/ }),

/***/ "./src/class/Person.ts":
/*!*****************************!*\
  !*** ./src/class/Person.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Person = exports.maximumDeduction = exports.allowance = exports.status = void 0;\nvar status;\n(function (status) {\n    status[\"single\"] = \"single\";\n    status[\"married\"] = \"married\";\n})(status = exports.status || (exports.status = {}));\nexports.allowance = {\n    marriedPersonAllowance: 264000,\n    basic: 132000\n};\nexports.maximumDeduction = {\n    mpf: 60000,\n};\nclass Person {\n    constructor(income, status, mpfRate) {\n        this.netChargeableIncome = 0; // income - totalDeduction - totalAllowance \n        this.totalDeduction = 0;\n        this.totalAllowance = 0;\n        this.income = income;\n        this.status = status;\n        this.mpfRate = mpfRate;\n    }\n    countTotalAllowance() {\n        if (this.status === status.married) {\n            this.totalAllowance += exports.allowance.marriedPersonAllowance;\n            return;\n        }\n        this.totalAllowance += exports.allowance.basic;\n    }\n    countTotalDeduction() {\n        if (this.mpfRate > exports.maximumDeduction.mpf) {\n            throw new Error(' have exceeed the maximum deduction ');\n        }\n        this.totalDeduction = this.mpfRate;\n    }\n    countNetChargeableIncome() {\n        // console.log(\"total allowance :\",this.totalAllowance)\n        // console.log(\"total deduction :\",this.totalDeduction)\n        if (this.income === 0) {\n            return this.netChargeableIncome = 0;\n        }\n        this.netChargeableIncome = this.income - this.totalDeduction - this.totalAllowance;\n        // console.log('netChargeableIncome :', this.netChargeableIncome)\n        return this.netChargeableIncome;\n    }\n}\nexports.Person = Person;\n\n\n//# sourceURL=webpack://305_pair/./src/class/Person.ts?");

/***/ }),

/***/ "./src/class/Tax.ts":
/*!**************************!*\
  !*** ./src/class/Tax.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tax = void 0;\nconst Person_1 = __webpack_require__(/*! ./Person */ \"./src/class/Person.ts\");\nclass Tax extends Person_1.Person {\n    constructor(income, status, mpfRate) {\n        super(income, status, mpfRate);\n        this.payableTax = 0;\n        this.applyStandardRate = false;\n        this.taxDeductionRate = 20000;\n    }\n    checkStandardRate() {\n        if (this.status === Person_1.status.single) {\n            if (this.income >= 2022000) {\n                this.applyStandardRate = true;\n            }\n        }\n        if (this.status === Person_1.status.married) {\n            if (this.income >= 3144000) {\n                this.applyStandardRate = true;\n            }\n        }\n    }\n    calculatePayableTax() {\n        if (this.applyStandardRate !== true) {\n            this.payableTax += Math.min(50000, this.netChargeableIncome) * 0.02;\n            this.payableTax += Math.max(0, Math.min(100000, this.netChargeableIncome) - 50000) * 0.06;\n            this.payableTax += Math.max(0, Math.min(150000, this.netChargeableIncome) - 100000) * 0.1;\n            this.payableTax += Math.max(0, Math.min(200000, this.netChargeableIncome) - 150000) * 0.14;\n            this.payableTax += Math.max(0, this.netChargeableIncome - 200000) * 0.17;\n            if (this.payableTax < 0) {\n                return this.payableTax = 0;\n            }\n            return this.payableTax = Math.floor(this.payableTax);\n        }\n        else {\n            this.payableTax = this.income * 0.15;\n        }\n        return this.payableTax;\n    }\n    taxReduction() {\n        this.payableTax -= 20000;\n    }\n    getPayableTax() {\n        return this.payableTax;\n    }\n}\nexports.Tax = Tax;\n\n\n//# sourceURL=webpack://305_pair/./src/class/Tax.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;