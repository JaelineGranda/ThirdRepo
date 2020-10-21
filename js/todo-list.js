const contentsPath = 'data/task.JSON';

const populate = (contents) => {
    const todoContainer = document.getElementById('todo-container');
    const taskTable = document.createElement('table');
    taskTable.setAttribute('id', 'taskTable');
    let row, col;


    contents.forEach(task => {
        row = document.createElement('tr');
        let x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        row.appendChild(x);
        col = document.createElement('td');
        col.innerHTML = task.title;
        row.appendChild(col);
        col.addEventListener('click', (evt) =>{ //show details when clicked
            const target = evt.target;
            let modalBtn = document.getElementById("modal-btn")
            let modal = document.querySelector(".modal")
            let modalcontent = document.getElementById('detailView');
            modalcontent.innerHTML = "";
            modal.style.display = "block";
            p = document.createElement('p');
            p.innerHTML = task.title + ":"; //shows task description
            modalcontent.appendChild(p);
            p = document.createElement('p');
            p.innerHTML = task.description; //shows task description
            modalcontent.appendChild(p);
            p = document.createElement('p');
            p.innerHTML = task.duedate; //shows task description
            modalcontent.appendChild(p);
            p = document.createElement('p');
            p.innerHTML = task.time; //shows task description
            modalcontent.appendChild(p);
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
            }
        });
        taskTable.appendChild(row);
    });
    todoContainer.appendChild(taskTable);
}

//Click add button to display form for adding task
const addButton = document.getElementById('task-add');
addButton.addEventListener('click', () =>{
    let formdisplay = document.getElementById("addform");
    formdisplay.style.display = "block";
})


//Click submit button to remove form and add tasks to table
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () =>{ //Call when submit button is clicked
    let formdisplay = document.getElementById("addform");
    formdisplay.style.display = "none"; //Remove form after item is submitted
    let table = document.getElementById("taskTable"); //refer to created table
    row = document.createElement('tr');
    let x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    row.appendChild(x);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newtitle").value;
    row.appendChild(col);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newdescription").value;
    row.appendChild(col);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newduedate").value;
    row.appendChild(col);
        col = document.createElement('td');
    col.innerHTML = document.getElementById("newtime").value;
    row.appendChild(col);
    taskTable.appendChild(row);
})


// Fetch todo items with XHR call from JSON file
const xhr = new XMLHttpRequest(); //New xhr object instance
xhr.open('GET', contentsPath); // get xhr
xhr.responseType = 'json'; //Server will return json
xhr.onload = function() { //onload
    const contents = xhr.response; //stores response to request in variable contents
    populate(contents);
}
xhr.send(); // send xhr




