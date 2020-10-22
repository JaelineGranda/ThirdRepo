const contentsPath = 'data/task.JSON'; //JSON file

const populate = (contents) => {
    const todoContainer = document.getElementById('todo-container');
    const taskTable = document.createElement('table'); // create table
    taskTable.setAttribute('id', 'taskTable');
    let row, col;

    contents.forEach(task => {
        row = document.createElement('tr');
        let x = document.createElement("INPUT"); // create checkbox for user interaction
        x.setAttribute("type", "checkbox");
        row.appendChild(x); // add checkbox to row
        col = document.createElement('td');
        col.innerHTML = task.title;
        row.appendChild(col);
        col.addEventListener('click', (evt) =>{ //show details when clicked
            const target = evt.target;
            let modal = document.querySelector(".modal")
            let modalcontent = document.getElementById('detailView');
            modalcontent.innerHTML = ""; // removes previous task details
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
            window.onclick = function(event) { // to exit modal pop-up click outside
                if (event.target == modal) {
                  modal.style.display = "none"; //remove modal from screen
                }
            }
        });
        taskTable.appendChild(row); 
    });
    todoContainer.appendChild(taskTable); // adds table to div
}

//Click add button to display form for adding task
const addButton = document.getElementById('task-add');
addButton.addEventListener('click', () =>{
    let formdisplay = document.getElementById("addform");
    formdisplay.style.display = "block"; // when add button is clicked, form is displayed
})


//Click submit button to remove form and add tasks to table
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () =>{ //Call when submit button is clicked
    let formdisplay = document.getElementById("addform");
    formdisplay.style.display = "none"; //Remove form after item is submitted
    row = document.createElement('tr');
    let x = document.createElement("INPUT"); //creates checkbox for user interaction
    x.setAttribute("type", "checkbox");
    row.appendChild(x);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newtitle").value; //adds user input value to row
    row.appendChild(col);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newdescription").value; //adds input value to row
    row.appendChild(col);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newduedate").value; //adds user input value to row
    row.appendChild(col);
    col = document.createElement('td');
    col.innerHTML = document.getElementById("newtime").value; //adds user input value to row
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




