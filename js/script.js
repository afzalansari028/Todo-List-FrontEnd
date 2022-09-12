console.log("hello")

document.getElementById('form-Task').addEventListener('submit', saveTask);

//save new todo
function saveTask(e) {
    e.preventDefault()

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    //fetch post request
    // fetch("http://localhost:8080/todo", {
    fetch("https://moderntodo-app.herokuapp.com/todo", {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: description
        }),
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    }).then(function (response) {
        getTasks();
        window.location.reload();
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
    // })
    // getTasks();
}

//show todo list
function getTasks() {

    // fetch("http://localhost:8080/todo").then((data) => {
    fetch("https://moderntodo-app.herokuapp.com/todo").then((data) => {
        // console.log(data)
        return data.json()  //converted to object
    }).then((objectData) => {
        console.log(objectData)
        let tasksView = ""
        objectData.map((values) => {
            // tasksView += `<td>${values.title} ${values.body}</td>`;
            tasksView += `<div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                   <div class="col-sm-3 text-left">
                                     <p>${values.title}</p>
                                   </div>
                                   <div class="col-sm-7 text-left">
                                     <p>${values.body}</p>
                                   </div>
                                   <div class="col-sm-2 text-right">
                                    <a href="#" onclick="deleteTask('${values.id}')" class="btn btn-danger ml-5">X</a>
                                   </div>
                                </div>
                            </div>              
                         </div>
            `;
        })
        // console.log(objectData)
        document.getElementById('tasks').innerHTML = tasksView;
    })
}
//delete one todo
function deleteTask(id) {
    // console.log(id)

    // fetch('http://localhost:8080/todo/' + id, {
    fetch('https://moderntodo-app.herokuapp.com/todo/' + id, {
        method: 'DELETE',
        headers:{"Access-Control-Allow-Origin": "*"},
    }).then(function (response) {
        getTasks();
        window.location.reload();
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
}
getTasks();