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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage),\n/* harmony export */   \"newItemPrompt\": () => (/* binding */ newItemPrompt),\n/* harmony export */   \"drawToDoItem\": () => (/* binding */ drawToDoItem),\n/* harmony export */   \"drawToDoList\": () => (/* binding */ drawToDoList)\n/* harmony export */ });\n/* harmony import */ var _todologic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todologic */ \"./src/todologic.js\");\n\n\nconst loadPage = () => {\n    let divnav = document.getElementById(\"nav\");\n    let navheading = document.createElement(\"h1\");\n    navheading.textContent = \"To-Do List App\";\n    divnav.appendChild(navheading);\n\n    let divprojectheading = document.getElementById(\"projectsheading\");\n    let projectHeading = document.createElement(\"h2\");\n    projectHeading.textContent = \"PROJECTS\";\n    divprojectheading.appendChild(projectHeading);\n\n    \n    let buttonNewToDo = document.createElement(\"button\");\n    buttonNewToDo.id = \"buttonnew\";\n    buttonNewToDo.textContent = \"+\";\n    document.getElementById(\"divnewbutton\").appendChild(buttonNewToDo);\n\n    document.getElementById(\"myForm\").style.display = \"none\";\n\n    let defaultItem1 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Clean room\", \"Organise and clean room.\", \"2021-02-05\", \"high\", false);\n    let defaultItem2 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Walk dogs\", \"Take Bella & Jessie out.\", \"2021-03-01\", \"medium\", false);\n    let defaultItem3 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Water plants\", \"Water the plants.\", \"2021-05-22\", \"low\", true);\n\n\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem1);\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem2);\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem3);\n\n\n    buttonNewToDo.addEventListener('click', () => {\n        newItemPrompt();\n    });\n\n    document.getElementById(\"btncancel\").addEventListener('click', () => {\n        document.getElementById(\"myForm\").style.display = \"none\";\n\n        \n    });\n\n    document.getElementById(\"btnadd\").addEventListener('click', () => {\n        \n        \n        let title = document.getElementById(\"titleinput\").value;\n        let description = document.getElementById(\"descripinput\").value;\n        let date = document.getElementById(\"dateinput\").value;\n        let priority = \"\";\n        if (document.getElementById(\"high\").checked) {\n            priority = \"high\";\n        } \n        if (document.getElementById(\"medium\").checked) {\n            priority = \"medium\";\n        } \n        if (document.getElementById(\"low\").checked) {\n            priority = \"low\";\n        }\n        let completed = false;\n        if (document.getElementById(\"completedTrue\").checked) {\n            completed == true;\n        }\n\n        //alert(title + \" \" + description + \" \" + date + \" \" + priority + \" \" + completed);\n\n\n        let newToDo = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(title, description, date, priority, completed);\n\n        //newToDo.print();\n        \n        (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(newToDo);\n\n        document.getElementById(\"myForm\").style.display = \"none\";\n        \n\n\n    })\n\n}\n\nconst newItemPrompt = () => {\n    document.getElementById(\"myForm\").style.display = \"block\";\n}\n\nconst drawToDoList = (arrProject) => {\n    let unorderedList = document.getElementById(\"ullist\");\n\n    while (unorderedList.firstChild) {\n        unorderedList.firstChild.remove();\n    }\n\n    for (let i = 0; i < arrProject.length; i++) {\n        if (arrProject[i] != null) {\n            drawToDoItem(arrProject[i]);\n        }      \n    }\n}\n\nconst drawToDoItem = (item) => {\n    \n    let content = document.getElementById(\"ullist\");\n\n    let itemList = document.createElement(\"li\")\n    itemList.className = \"itemList\";\n    \n    itemList.addEventListener('click', () =>{\n        itemList.style.textDecoration = \"line-through\";\n        itemList.style.color == \"red\";\n    })\n\n    let divTitle = document.createElement(\"div\");\n    divTitle.textContent = item.getTitle();\n    divTitle.className = \"todotitle\";\n\n    let divDueDate = document.createElement(\"div\");\n    divDueDate.textContent = item.getDueDate();\n    divDueDate.className = \"tododuedate\";\n\n    if (item.getPriority() == 'high') {\n        itemList.style.color = \"red\";\n        alert('red');\n    } else if (item.getPriority() == 'medium') {\n        itemList.style.color = \"orange\";\n    } else if (item.getPriority() == 'low') {\n        itemList.style.color = \"blue\";\n    } else {\n        itemList.style.color = \"white\";\n    }\n\n\n    itemList.appendChild(divTitle);\n    itemList.appendChild(divDueDate);\n    content.appendChild(itemList);\n\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/todologic.js":
/*!**************************!*\
  !*** ./src/todologic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDo\": () => (/* binding */ toDo),\n/* harmony export */   \"addToProject\": () => (/* binding */ addToProject),\n/* harmony export */   \"getProjectArr\": () => (/* binding */ getProjectArr)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nlet defaultProj = [];\n\n\n\n\n\nconst toDo = (name, descrip, date, importance, done) => {\n    let title = name;\n    let description = descrip;\n    let dueDate = date;\n    let priority = importance;\n    let completed = done;\n\n    let getTitle = () => {\n        return title;\n    }\n\n    let getDescription = () => {\n        return description;\n    }\n\n    let getDueDate = () => {\n        return dueDate;\n    }\n\n    let getPriority = () => {\n        return priority;\n    }\n\n    let getCompleted = () => {\n        return completed;\n    }\n\n\n\n    let print = function () {\n        alert(title + ' ' + description + ' ' + dueDate + ' ' + priority + ' ' + completed);\n    }\n\n    return {\n        print,\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        getCompleted\n    }\n}\n\nconst addToProject = (toDoItem) => {\n    \n    defaultProj.push(toDoItem);\n\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.drawToDoList)(defaultProj);\n\n}\n\nconst getProjectArr = () => {\n    return defaultProj;\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/todologic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;