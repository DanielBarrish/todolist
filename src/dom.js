import {
    toDo,
    addToProject,
    getProjectArr,
    project,
    addNewProject,
    listOfProjects

} from './todologic'

/* Loads the page for the first time */

let editMode = false;
let oldProjectName = "";
let oldToDoTitle = "";

const loadPage = () => {
    /* Setup and Headings */

    let divnav = document.getElementById("nav");
    let navheading = document.createElement("h1");
    navheading.textContent = "To-Do List App";
    divnav.appendChild(navheading);

    let divprojectheading = document.getElementById("projectsheading");
    let projectHeading = document.createElement("h1");
    projectHeading.textContent = "Projects";
    divprojectheading.appendChild(projectHeading);


    let buttonNewToDo = document.createElement("img");
    buttonNewToDo.id = "buttonnew";
    buttonNewToDo.src = "add.png";
    document.getElementById("divnewbutton").appendChild(buttonNewToDo);

    let buttonNewProject = document.createElement("img");
    buttonNewProject.id = "buttonnewproject";
    buttonNewProject.src = "add.png";
    document.getElementById("projects").appendChild(buttonNewProject);

    let toDoForm = document.getElementById("todoform");
    toDoForm.style.display = "none";

    document.getElementById("projectform").style.display = "none";

    /* Creating Sample Projects */

    let defaultProject1 = project("Project 1", false);
    addNewProject(defaultProject1);
    let defaultProject2 = project("Project 2", true);
    addNewProject(defaultProject2);


    /* Creating Sample To-Do Items*/

    let defaultItem1 = toDo("Clean room", "Organise and clean room.", "2021-02-05", "high", false);
    let defaultItem2 = toDo("Walk dogs", "Take Bella & Jessie out.", "2021-03-01", "medium", false);
    let defaultItem3 = toDo("Water plants", "Water the plants.", "2021-05-22", "low", true);


    addToProject(defaultItem1, "Project 1");
    addToProject(defaultItem2, "Project 1");
    addToProject(defaultItem3, "Project 2");

    /* Event Listener for "New To-Do" Button */

    buttonNewToDo.addEventListener('click', () => {
        toDoForm.style.display = "block";
    });

    /* Event Listener for "New Project" Button */

    buttonNewProject.addEventListener('click', () => {
        document.getElementById("projectform").style.display = "block";
    })

    /* Event listener for cancelling the todo form */

    document.getElementById("btncancel").addEventListener('click', () => {
        toDoForm.style.display = "none";
        editMode = false;
    })

    /* Event listener for cancelling the project form */

    document.getElementById("btncancelproject").addEventListener('click', () => {
        document.getElementById("projectform").style.display = "none";
        editMode = false;
    })

    /* Event listener for submitting the todo form */

    document.getElementById("btnadd").addEventListener('click', () => {
        submitToDoForm(editMode, oldToDoTitle);
        editMode = false;
        oldToDoTitle = "";
        resetToDoForm();
    })

    /* Event listener for submitting the project form */

    document.getElementById("btnaddproject").addEventListener('click', () => {
        submitProjectForm(editMode, oldProjectName);
        editMode = false;
    })

}

const submitToDoForm = (editMode, oldTitle) => {
    /* Grabs the data for the To-Do from input */

    let title = document.getElementById("titleinput").value;
    let description = document.getElementById("descripinput").value;
    let date = document.getElementById("dateinput").value;
    let priority = "";
    if (document.getElementById("high").checked) {
        priority = "high";
    }
    if (document.getElementById("medium").checked) {
        priority = "medium";
    }
    if (document.getElementById("low").checked) {
        priority = "low";
    }
    let completed = false;
    if (document.getElementById("completedTrue").checked) {
        completed = true;
    }

    if (editMode == false) {

        /* Creates a new To-Do object */

        let newToDo = toDo(title, description, date, priority, completed);

        /* Adds the new To-Do to the project */

        let i = 0;

        while (listOfProjects[i] != null) {
            if (listOfProjects[i].getActivity()) {
                addToProject(newToDo, listOfProjects[i].getName());
                break;
            }
            i++;
        }

    } else {
        let i = 0;

        let project;

        while (listOfProjects[i] != null) {
            if (listOfProjects[i].getActivity()) {
                let j = 0;
                while (listOfProjects[i].getToDo(j) != null) {
                    if (listOfProjects[i].getToDo(j).getTitle() == oldTitle) {
                        listOfProjects[i].getToDo(j).setTitle(title);
                        listOfProjects[i].getToDo(j).setDescription(description);
                        listOfProjects[i].getToDo(j).setDueDate(date);
                        listOfProjects[i].getToDo(j).setPriority(priority);
                        listOfProjects[i].getToDo(j).setCompleted(completed);
                        drawToDoList(listOfProjects[i].getToDoList());
                        break;
                    }
                    j++;
                }
                break;
            }
            i++;
        }


    }

    /* Hides the form */

    document.getElementById("todoform").style.display = "none";
}

const submitProjectForm = (editMode, oldName) => {
    let newName = document.getElementById("projectnameinput").value;

    if (!editMode) {
        let newProject = project(newName, true);
        addNewProject(newProject);
    }
    else {
        let i = 0;

        while (listOfProjects[i] != null) {
            if (listOfProjects[i].getName() == oldName) {
                listOfProjects[i].setName(newName);
                drawProjectList(listOfProjects);
                break;
            } else {
                i++;
            }
        }
        editMode = false;
        oldProjectName = "";
    }
    document.getElementById("projectform").style.display = "none";

}


const drawToDoList = (arrProject) => {
    let unorderedList = document.getElementById("ullist");


    while (unorderedList.firstChild) {
        unorderedList.firstChild.remove();
    }

    for (let i = 0; i < arrProject.length; i++) {
        if (arrProject[i].getTitle() != null) {
            drawToDoItem(arrProject[i]);
        }
    }
}

const drawToDoItem = (item) => {

    let content = document.getElementById("ullist");

    let itemList = document.createElement("li")
    itemList.className = "itemlist";

    let imgCompleted = document.createElement("img");
    imgCompleted.className = "todoicon";
    if (item.getCompleted()) {
        imgCompleted.src = "complete.png";
        itemList.style.textDecoration = "line-through";
    } else {
        imgCompleted.src = "circle.png";
    }

    imgCompleted.addEventListener('click', () => {
        if (item.getCompleted()) {
            itemList.style.textDecoration = "";
            imgCompleted.src = "circle.png";
        } else {
            itemList.style.textDecoration = "line-through";
            imgCompleted.src = "complete.png";
        }
        item.switchCompleted();
    })

    let divTitle = document.createElement("div");
    divTitle.textContent = item.getTitle();
    divTitle.className = "todotitle";

    divTitle.addEventListener('click', () => {
        alert(item.getDescription());
    })

    let divDueDate = document.createElement("div");
    divDueDate.textContent = item.getDueDate();
    divDueDate.className = "tododuedate";

    let imgEdit = document.createElement("img");
    imgEdit.className = "modifyicons";
    imgEdit.src = "edit.png";
    imgEdit.addEventListener('click', () => {
        editToDo(item);
    })

    let imgDelete = document.createElement("img");
    imgDelete.className = "modifyicons";
    imgDelete.src = "delete.png";
    imgDelete.addEventListener('click', () => {
        deleteToDo(item);
    })


    if (item.getPriority() == 'high') {
        itemList.style.color = "red";
    } else if (item.getPriority() == 'medium') {
        itemList.style.color = "orange";
    } else if (item.getPriority() == 'low') {
        itemList.style.color = "blue";
    } else {
        itemList.style.color = "white";
    }

    itemList.appendChild(imgCompleted);
    itemList.appendChild(divTitle);
    itemList.appendChild(divDueDate);
    itemList.appendChild(imgEdit);
    itemList.appendChild(imgDelete);
    content.appendChild(itemList);
}

const drawProjectList = (projectList) => {
    let unorderedList = document.getElementById("ullistprojects");

    while (unorderedList.firstChild) {
        unorderedList.firstChild.remove();
    }


    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].getName() != null) {
            drawProject(projectList[i]);
        }
    }


}


const drawProject = (project) => {
    let content = document.getElementById("ullistprojects");

    let domproject = document.createElement("li");
    domproject.className = "domproject";


    let divTitle = document.createElement("div");
    divTitle.textContent = project.getName();
    divTitle.className = "projecttitle";


    let imgEdit = document.createElement("img");
    imgEdit.className = "modifyicons";
    imgEdit.src = "edit.png";
    imgEdit.addEventListener('click', () => {
        editProject(project);
    })

    let imgDelete = document.createElement("img");
    imgDelete.className = "modifyicons";
    imgDelete.src = "delete.png";
    imgDelete.addEventListener('click', () => {
        deleteProject(project);

    })

    domproject.style.color = "white";

    if (project.getActivity()) {
        domproject.style.backgroundColor = "#343434";
        document.getElementById("todoheading").textContent = project.getName();
    }

    divTitle.addEventListener('click', () => {
        resetProjectActivity();
        domproject.style.backgroundColor = "#343434";
        project.setActivity(true);
        drawToDoList(project.getToDoList());

        document.getElementById("todoheading").textContent = project.getName();

    })



    domproject.appendChild(divTitle);
    domproject.appendChild(imgEdit);
    domproject.appendChild(imgDelete);
    content.appendChild(domproject);




}

const resetProjectActivity = () => {
    let allprojects = document.querySelectorAll(".domproject");
    for (let j = 0; j < allprojects.length; j++) {
        allprojects[j].style.backgroundColor = "";
    }


    let i = 0;
    while (listOfProjects[i] != null) {
        listOfProjects[i].setActivity(false);
        i++;
    }
}

const editToDo = (item) => {
    document.getElementById("titleinput").value = item.getTitle();
    document.getElementById("descripinput").value = item.getDescription();
    document.getElementById("dateinput").value = item.getDueDate();
    if (item.getPriority() == "high") {
        document.getElementById("high").checked = true;
    } else if (item.getPriority() == "medium") {
        document.getElementById("medium").checked = true;
    } else if (item.getPriority() == "low") {
        document.getElementById("low").checked = true;
    } else {

    }
    if (item.getCompleted() == true) {
        document.getElementById("completedTrue").checked = true;
    }


    document.getElementById("todoform").style.display = "block";
    editMode = true;
    oldToDoTitle = item.getTitle();

}

const resetToDoForm = () => {
    document.getElementById("titleinput").value = null;
    document.getElementById("descripinput").value = null;
    document.getElementById("dateinput").value = null;
    document.getElementById("high").checked = false;
    document.getElementById("medium").checked = false;
    document.getElementById("low").checked = false;
    document.getElementById("completedTrue").checked = false;
}

const deleteToDo = (item) => {
    let title = item.getTitle();

    let i = 0;
    let j = 0;

    while (i <= listOfProjects.length - 1) {
        j = 0;
        while (j <= listOfProjects[i].getToDoList().length - 1) {
            if (listOfProjects[i].getToDo(j).getTitle() == title) {
                listOfProjects[i].getToDo(j).setTitle(null);
                drawToDoList(listOfProjects[i].getToDoList());
                break;
            }
            j++;
        }
        i++;
    }
}

const editProject = (project) => {
    document.getElementById("projectform").style.display = "block";
    editMode = true;
    oldProjectName = project.getName();

}

const deleteProject = (project) => {
    let i = 0;
    while (listOfProjects[i] != null) {
        if (listOfProjects[i].getName() == project.getName()) {
            listOfProjects[i].setName(null);
            listOfProjects[i].setToDoList(null);

            break;
        }
        i++;
    }
    resetProjectActivity();

    i = 0;

    while (listOfProjects[i].getName() == null) {
        i++;
    }
    listOfProjects[i].setActivity(true);
    drawProjectList(listOfProjects);

    drawToDoList(listOfProjects[i].getToDoList());
}

export {
    loadPage,
    drawToDoItem,
    drawToDoList,
    drawProjectList,
    resetProjectActivity
}