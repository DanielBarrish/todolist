import {toDo,
    addToProject,
    getProjectArr

} from './todologic'

const loadPage = () => {
    let divnav = document.getElementById("nav");
    let navheading = document.createElement("h1");
    navheading.textContent = "To-Do List App";
    divnav.appendChild(navheading);

    let divprojectheading = document.getElementById("projectsheading");
    let projectHeading = document.createElement("h2");
    projectHeading.textContent = "PROJECTS";
    divprojectheading.appendChild(projectHeading);

    
    let buttonNewToDo = document.createElement("button");
    buttonNewToDo.id = "buttonnew";
    buttonNewToDo.textContent = "+";
    document.getElementById("divnewbutton").appendChild(buttonNewToDo);

    document.getElementById("myForm").style.display = "none";

    let defaultItem1 = toDo("Clean room", "Organise and clean room.", "2021-02-05", "high", false);
    let defaultItem2 = toDo("Walk dogs", "Take Bella & Jessie out.", "2021-03-01", "medium", false);
    let defaultItem3 = toDo("Water plants", "Water the plants.", "2021-05-22", "low", true);


    addToProject(defaultItem1);
    addToProject(defaultItem2);
    addToProject(defaultItem3);


    buttonNewToDo.addEventListener('click', () => {
        newItemPrompt();
    });

    document.getElementById("btncancel").addEventListener('click', () => {
        document.getElementById("myForm").style.display = "none";

        
    });

    document.getElementById("btnadd").addEventListener('click', () => {
        
        
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
            completed == true;
        }

        //alert(title + " " + description + " " + date + " " + priority + " " + completed);


        let newToDo = toDo(title, description, date, priority, completed);

        //newToDo.print();
        
        addToProject(newToDo);

        document.getElementById("myForm").style.display = "none";
        


    })

}

const newItemPrompt = () => {
    document.getElementById("myForm").style.display = "block";
}

const drawToDoList = (arrProject) => {
    let unorderedList = document.getElementById("ullist");

    while (unorderedList.firstChild) {
        unorderedList.firstChild.remove();
    }

    for (let i = 0; i < arrProject.length; i++) {
        if (arrProject[i] != null) {
            drawToDoItem(arrProject[i]);
        }      
    }
}

const drawToDoItem = (item) => {
    
    let content = document.getElementById("ullist");

    let itemList = document.createElement("li")
    itemList.className = "itemList";
    
    itemList.addEventListener('click', () =>{
        itemList.style.textDecoration = "line-through";
        itemList.style.color == "red";
    })

    let divTitle = document.createElement("div");
    divTitle.textContent = item.getTitle();
    divTitle.className = "todotitle";

    let divDueDate = document.createElement("div");
    divDueDate.textContent = item.getDueDate();
    divDueDate.className = "tododuedate";

    if (item.getPriority() == 'high') {
        itemList.style.color = "red";
        alert('red');
    } else if (item.getPriority() == 'medium') {
        itemList.style.color = "orange";
    } else if (item.getPriority() == 'low') {
        itemList.style.color = "blue";
    } else {
        itemList.style.color = "white";
    }


    itemList.appendChild(divTitle);
    itemList.appendChild(divDueDate);
    content.appendChild(itemList);


}

export {
    loadPage,
    newItemPrompt,
    drawToDoItem,
    drawToDoList

}