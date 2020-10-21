const contentsPath = 'data/task.JSON';

const populate = (contents) => {
    const todoContainer = document.getElementById('todo-container');
    const taskTable = document.createElement('table');
    let row, col;
    contents.forEach(task => {
        row = document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = task.title;
        row.appendChild(col);
        col = document.createElement('td');
        col.innerHTML = task.description;
        row.appendChild(col);
        col = document.createElement('td');
        col.innerHTML = task.duedate;
        row.appendChild(col);
        col = document.createElement('td');
        col.innerHTML = task.time;
        row.appendChild(col);
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


// Fetch todo items with XHR call from JSON file
const xhr = new XMLHttpRequest(); //New xhr object instance
xhr.open('GET', contentsPath); // get xhr
xhr.responseType = 'json'; //Server will return json
xhr.onload = function() { //onload
    const contents = xhr.response; //stores response to request in variable contents
    populate(contents);
}
xhr.send(); // send xhr




