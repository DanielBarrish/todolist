import {drawToDoItem, drawToDoList, drawProjectList, resetProjectActivity} from './dom.js'

let defaultProj = [];
let listOfProjects = [];

const project = (title, active) => {
    let name = title;
    let activity = active;
    let id = null;
    let toDoList = [];

    let getName = () => {
        return name;
    }

    let getActivity = () => {
        return activity;
    }

    let getID = () => {
        return id;
    }

    let getToDoList = () => {
        return toDoList;
    }

    let getToDo = (i) => {
        return toDoList[i];
    }

    let setName = (newName) => {
        name = newName;
    } 

    let setToDoList = (newArray) => {
        toDoList = newArray;
    }

    let setID = (newID) => {
        id = newID;
    }

    let setActivity = (newActivity) => {
        activity = newActivity;
    }

    let getString = () => {
        return name + " " + activity + " " + id;

    }

    return {
        getName,
        getActivity, 
        getID,
        getToDoList,
        getToDo,
        setName, 
        setID,
        setToDoList,
        setActivity,
        getString,
        getToDoList   
    }
}

const addNewProject = (project) => {
    resetProjectActivity();
    let length = listOfProjects.length;
    
    listOfProjects.push(project);

    listOfProjects[length].setID(length);
    drawProjectList(listOfProjects);
    drawToDoList(listOfProjects.length);

} 





const toDo = (name, descrip, date, importance, done) => {
    let title = name;
    let description = descrip;
    let dueDate = date;
    let priority = importance;
    let completed = done;

    let getTitle = () => {
        return title;
    }

    let getDescription = () => {
        return description;
    }

    let getDueDate = () => {
        return dueDate;
    }

    let getPriority = () => {
        return priority;
    }

    let getCompleted = () => {
        return completed;
    }

    let switchCompleted = () => {
        completed = !completed;
    }

    let setTitle = (newTitle) => {
        title = newTitle;
    }

    let setDescription = (newDescription) => {
        description = newDescription;
    }

    let setDueDate = (newDueDate) => {
        dueDate = newDueDate;
    }

    let setPriority = (newPriority) => {
        priority = newPriority;
    }

    let setCompleted = (newCompleted) => {
        completed = newCompleted;
    }



    let print = function () {
        alert(title + ' ' + description + ' ' + dueDate + ' ' + priority + ' ' + completed);
    }

    return {
        print,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getCompleted,
        switchCompleted,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        setCompleted
        
    }
}

const addToProject = (toDoItem, projectName) => {
    let i = 0;
    while (listOfProjects[i] != null) {      
        if (listOfProjects[i].getName() == projectName) {
            let project = listOfProjects[i].getToDoList();
            project.push(toDoItem);
            drawToDoList(project);
            break;
        }

        i++;
    }


}

const getProjectArr = () => {
    return defaultProj;
}



export {
    toDo,
    addToProject,
    getProjectArr,
    project,
    addNewProject, 
    listOfProjects
}