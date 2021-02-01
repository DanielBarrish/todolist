import {drawToDoItem, drawToDoList} from './dom.js'

let defaultProj = [];





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



    let print = function () {
        alert(title + ' ' + description + ' ' + dueDate + ' ' + priority + ' ' + completed);
    }

    return {
        print,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getCompleted
    }
}

const addToProject = (toDoItem) => {
    
    defaultProj.push(toDoItem);

    drawToDoList(defaultProj);

}

const getProjectArr = () => {
    return defaultProj;
}



export {
    toDo,
    addToProject,
    getProjectArr
}