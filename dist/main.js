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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage),\n/* harmony export */   \"drawToDoItem\": () => (/* binding */ drawToDoItem),\n/* harmony export */   \"drawToDoList\": () => (/* binding */ drawToDoList),\n/* harmony export */   \"drawProjectList\": () => (/* binding */ drawProjectList),\n/* harmony export */   \"resetProjectActivity\": () => (/* binding */ resetProjectActivity)\n/* harmony export */ });\n/* harmony import */ var _todologic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todologic */ \"./src/todologic.js\");\n\n\n/* Loads the page for the first time */\n\nconst loadPage = () => {\n    /* Setup and Headings */\n\n    let divnav = document.getElementById(\"nav\");\n    let navheading = document.createElement(\"h1\");\n    navheading.textContent = \"To-Do List App\";\n    divnav.appendChild(navheading);\n\n    let divprojectheading = document.getElementById(\"projectsheading\");\n    let projectHeading = document.createElement(\"h1\");\n    projectHeading.textContent = \"Projects\";\n    divprojectheading.appendChild(projectHeading);\n\n\n    let buttonNewToDo = document.createElement(\"img\");\n    buttonNewToDo.id = \"buttonnew\";\n    buttonNewToDo.src = \"add.png\";\n    document.getElementById(\"divnewbutton\").appendChild(buttonNewToDo);\n\n    let buttonNewProject = document.createElement(\"img\");\n    buttonNewProject.id = \"buttonnewproject\";\n    buttonNewProject.src = \"add.png\";\n    document.getElementById(\"projects\").appendChild(buttonNewProject);\n\n    let toDoForm = document.getElementById(\"todoform\");\n    toDoForm.style.display = \"none\";\n\n    document.getElementById(\"projectform\").style.display = \"none\";\n\n    /* Creating Sample Projects */\n\n    let defaultProject1 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.project)(\"Project 1\", true);\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(defaultProject1);\n    let defaultProject2 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.project)(\"Project 2\", false);\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(defaultProject2);\n\n\n    /* Creating Sample To-Do Items*/\n\n    let defaultItem1 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Clean room\", \"Organise and clean room.\", \"2021-02-05\", \"high\", false);\n    let defaultItem2 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Walk dogs\", \"Take Bella & Jessie out.\", \"2021-03-01\", \"medium\", false);\n    let defaultItem3 = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(\"Water plants\", \"Water the plants.\", \"2021-05-22\", \"low\", true);\n\n\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem1, \"Project 1\");\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem2, \"Project 2\");\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(defaultItem3, \"Project 1\");\n\n    /* Event Listener for \"New To-Do\" Button */\n\n    buttonNewToDo.addEventListener('click', () => {\n        toDoForm.style.display = \"block\";\n    });\n\n    /* Event Listener for \"New Project\" Button */\n\n    buttonNewProject.addEventListener('click', () => {\n        document.getElementById(\"projectform\").style.display = \"block\";\n    })\n\n    /* Event listener for cancelling the todo form */\n\n    document.getElementById(\"btncancel\").addEventListener('click', () => {\n        toDoForm.style.display = \"none\";\n    })\n\n    /* Event listener for cancelling the project form */\n\n    document.getElementById(\"btncancelproject\").addEventListener('click', () => {\n        document.getElementById(\"projectform\").style.display = \"none\";\n    })\n\n    /* Event listener for submitting the todo form */\n\n    document.getElementById(\"btnadd\").addEventListener('click', () => {\n        submitToDoForm();\n    })\n\n    /* Event listener for submitting the project form */\n\n    document.getElementById(\"btnaddproject\").addEventListener('click', () => {\n        submitProjectForm();\n    })\n\n\n\n\n\n\n\n}\n\nconst submitToDoForm = () => {\n    /* Grabs the data for the To-Do from input */\n\n    let title = document.getElementById(\"titleinput\").value;\n    let description = document.getElementById(\"descripinput\").value;\n    let date = document.getElementById(\"dateinput\").value;\n    let priority = \"\";\n    if (document.getElementById(\"high\").checked) {\n        priority = \"high\";\n    }\n    if (document.getElementById(\"medium\").checked) {\n        priority = \"medium\";\n    }\n    if (document.getElementById(\"low\").checked) {\n        priority = \"low\";\n    }\n    let completed = false;\n    if (document.getElementById(\"completedTrue\").checked) {\n        completed = true;\n    }\n\n    /* Creates a new To-Do object */\n\n    let newToDo = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.toDo)(title, description, date, priority, completed);\n\n    /* Adds the new To-Do to the project */\n\n    let i = 0;\n\n    while (_todologic__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[i] != null) {\n        if (_todologic__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[i].getActivity()) {\n            (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addToProject)(newToDo, _todologic__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[i].getName());\n            break;\n        }\n        i++;\n    }\n\n    /* Hides the form */\n\n    document.getElementById(\"todoform\").style.display = \"none\";\n}\n\nconst submitProjectForm = () => {\n    let projectName = document.getElementById(\"projectnameinput\").value;\n\n    let newProject = (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.project)(projectName, true);\n    (0,_todologic__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(newProject);\n\n    document.getElementById(\"projectform\").style.display = \"none\";\n\n}\n\n\nconst drawToDoList = (arrProject) => {\n    let unorderedList = document.getElementById(\"ullist\");\n\n\n    while (unorderedList.firstChild) {\n        unorderedList.firstChild.remove();\n    }\n\n    for (let i = 0; i < arrProject.length; i++) {\n        if (arrProject[i] != null) {\n            drawToDoItem(arrProject[i]);\n        }\n    }\n}\n\nconst drawToDoItem = (item) => {\n\n    let content = document.getElementById(\"ullist\");\n\n    let itemList = document.createElement(\"li\")\n    itemList.className = \"itemlist\";\n\n    let imgCompleted = document.createElement(\"img\");\n    imgCompleted.className = \"todoicon\";\n    if (item.getCompleted()) {\n        imgCompleted.src = \"complete.png\";\n        itemList.style.textDecoration = \"line-through\";\n    } else {\n        imgCompleted.src = \"circle.png\";\n    }\n\n    imgCompleted.addEventListener('click', () => {\n        if (item.getCompleted()) {\n            itemList.style.textDecoration = \"\";\n            imgCompleted.src = \"circle.png\";\n        } else {\n            itemList.style.textDecoration = \"line-through\";\n            imgCompleted.src = \"complete.png\";\n        }\n        item.switchCompleted();\n    })\n\n    let divTitle = document.createElement(\"div\");\n    divTitle.textContent = item.getTitle();\n    divTitle.className = \"todotitle\";\n\n    let divDueDate = document.createElement(\"div\");\n    divDueDate.textContent = item.getDueDate();\n    divDueDate.className = \"tododuedate\";\n\n    let imgEdit = document.createElement(\"img\");\n    imgEdit.className = \"modifyicons\";\n    imgEdit.src = \"edit.png\";\n    imgEdit.addEventListener('click', () => {\n        editToDo(item);\n    })\n\n    let imgDelete = document.createElement(\"img\");\n    imgDelete.className = \"modifyicons\";\n    imgDelete.src = \"delete.png\";\n    imgDelete.addEventListener('click', () => {\n        deleteToDo();\n    })\n\n\n    if (item.getPriority() == 'high') {\n        itemList.style.color = \"red\";\n    } else if (item.getPriority() == 'medium') {\n        itemList.style.color = \"orange\";\n    } else if (item.getPriority() == 'low') {\n        itemList.style.color = \"blue\";\n    } else {\n        itemList.style.color = \"white\";\n    }\n\n    itemList.appendChild(imgCompleted);\n    itemList.appendChild(divTitle);\n    itemList.appendChild(divDueDate);\n    itemList.appendChild(imgEdit);\n    itemList.appendChild(imgDelete);\n    content.appendChild(itemList);\n}\n\nconst drawProjectList = (projectList) => {\n    let unorderedList = document.getElementById(\"ullistprojects\");\n\n    while (unorderedList.firstChild) {\n        unorderedList.firstChild.remove();\n    }\n\n\n    for (let i = 0; i < projectList.length; i++) {\n        if (projectList[i] != null) {\n            drawProject(projectList[i]);\n        }\n    }\n\n\n}\n\nconst drawProject = (project) => {\n    let content = document.getElementById(\"ullistprojects\");\n\n    let domproject = document.createElement(\"li\");\n    domproject.className = \"domproject\";\n\n\n    let divTitle = document.createElement(\"div\");\n    divTitle.textContent = project.getName();\n    divTitle.className = \"projecttitle\";\n\n\n    let imgEdit = document.createElement(\"img\");\n    imgEdit.className = \"modifyicons\";\n    imgEdit.src = \"edit.png\";\n    imgEdit.addEventListener('click', () => {\n        alert(\"edit project\");\n    })\n\n    let imgDelete = document.createElement(\"img\");\n    imgDelete.className = \"modifyicons\";\n    imgDelete.src = \"delete.png\";\n    imgDelete.addEventListener('click', () => {\n        alert(\"delete project\")\n    })\n\n    domproject.style.color = \"white\";\n\n    if (project.getActivity()) {\n        domproject.style.backgroundColor = \"#343434\";\n        document.getElementById(\"todoheading\").textContent = project.getName();\n    }\n\n    domproject.addEventListener('click', () => {\n        resetProjectActivity();\n        domproject.style.backgroundColor = \"#343434\";\n        project.setActivity(true);\n        drawToDoList(project.getToDoList());\n\n        document.getElementById(\"todoheading\").textContent = project.getName();\n\n    })\n\n\n\n    domproject.appendChild(divTitle);\n    domproject.appendChild(imgEdit);\n    domproject.appendChild(imgDelete);\n    content.appendChild(domproject);\n\n\n\n\n}\n\nconst resetProjectActivity = () => {\n    let allprojects = document.querySelectorAll(\".domproject\");\n    for (let j = 0; j < allprojects.length; j++) {\n        allprojects[j].style.backgroundColor = \"\";\n    }\n\n\n    let i = 0;\n    while (_todologic__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[i] != null) {\n        _todologic__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[i].setActivity(false);\n        i++;\n    }\n}\n\nconst editToDo = (item) => {\n    //alert(item.getTitle());\n    document.getElementById(\"todoform\").style.display = \"block\";\n\n    /* Grabs the data for the To-Do from input */\n    document.getElementById(\"titleinput\").value = item.getTitle();\n    document.getElementById(\"dateinput\").value = item.getDueDate();\n    document.getElementById(\"descripinput\").value = item.getDescription();\n\n    /*\n    \n\n    let title = document.getElementById(\"titleinput\").value;\n    let description = document.getElementById(\"descripinput\").value;\n    let date = document.getElementById(\"dateinput\").value;\n    let priority = \"\";\n    if (document.getElementById(\"high\").checked) {\n        priority = \"high\";\n    }\n    if (document.getElementById(\"medium\").checked) {\n        priority = \"medium\";\n    }\n    if (document.getElementById(\"low\").checked) {\n        priority = \"low\";\n    }\n    let completed = false;\n    if (document.getElementById(\"completedTrue\").checked) {\n        completed = true;\n    }\n\n    Creates a new To - Do object\n\n    let newToDo = toDo(title, description, date, priority, completed);\n\n    Adds the new To - Do to the project\n\n    let i = 0;\n\n    while (listOfProjects[i] != null) {\n        if (listOfProjects[i].getActivity()) {\n            addToProject(newToDo, listOfProjects[i].getName());\n            break;\n        }\n        i++;\n    }\n\n    Hides the form\n\n        */\n\n    document.getElementById(\"titleinput\").value = \"\";\n    document.getElementById(\"dateinput\").value = \"\";\n    document.getElementById(\"descripinput\").value = \"\";\n\n    // document.getElementById(\"todoform\").style.display = \"none\";\n\n}\n\nconst deleteToDo = () => {\n    alert(\"delete\");\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDo\": () => (/* binding */ toDo),\n/* harmony export */   \"addToProject\": () => (/* binding */ addToProject),\n/* harmony export */   \"getProjectArr\": () => (/* binding */ getProjectArr),\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"listOfProjects\": () => (/* binding */ listOfProjects)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nlet defaultProj = [];\nlet listOfProjects = [];\n\nconst project = (title, active) => {\n    let name = title;\n    let activity = active;\n    let id = null;\n    let toDoList = [];\n\n    let getName = () => {\n        return name;\n    }\n\n    let getActivity = () => {\n        return activity;\n    }\n\n    let getID = () => {\n        return id;\n    }\n\n    let getToDoList = () => {\n        return toDoList;\n    }\n\n    let setID = (newID) => {\n        id = newID;\n    }\n\n    let setActivity = (newActivity) => {\n        activity = newActivity;\n    }\n\n    let getString = () => {\n        return name + \" \" + activity + \" \" + id;\n\n    }\n\n    return {\n        getName,\n        getActivity, \n        getID,\n        getToDoList,\n        setID ,\n        setActivity,\n        getString,\n        getToDoList   \n    }\n}\n\nconst addNewProject = (project) => {\n    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetProjectActivity)();\n    let length = listOfProjects.length;\n    \n    listOfProjects.push(project);\n\n    listOfProjects[length].setID(length);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.drawProjectList)(listOfProjects);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.drawToDoList)(listOfProjects.length);\n\n} \n\n\n\n\n\nconst toDo = (name, descrip, date, importance, done) => {\n    let title = name;\n    let description = descrip;\n    let dueDate = date;\n    let priority = importance;\n    let completed = done;\n\n    let getTitle = () => {\n        return title;\n    }\n\n    let getDescription = () => {\n        return description;\n    }\n\n    let getDueDate = () => {\n        return dueDate;\n    }\n\n    let getPriority = () => {\n        return priority;\n    }\n\n    let getCompleted = () => {\n        return completed;\n    }\n\n    let switchCompleted = () => {\n        completed = !completed;\n    }\n\n\n\n    let print = function () {\n        alert(title + ' ' + description + ' ' + dueDate + ' ' + priority + ' ' + completed);\n    }\n\n    return {\n        print,\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        getCompleted,\n        switchCompleted\n    }\n}\n\nconst addToProject = (toDoItem, projectName) => {\n    let i = 0;\n    while (listOfProjects[i] != null) {      \n        if (listOfProjects[i].getName() == projectName) {\n            let project = listOfProjects[i].getToDoList();\n            project.push(toDoItem);\n            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.drawToDoList)(project);\n            break;\n        }\n\n        i++;\n    }\n\n\n}\n\nconst getProjectArr = () => {\n    return defaultProj;\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/todologic.js?");

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