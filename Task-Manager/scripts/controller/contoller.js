import { taskOperations } from "../services/services.js";

window.addEventListener("load", bindEvents);

function bindEvents() {
  const addTaskButton = document
    .getElementById("add")
    .addEventListener("click", addTask);
  const editTaskButton = document
    .getElementById("edit")
    .addEventListener("click", editTask);
}

function addTask() {
  const taskObject = {};
  const ids = ["id", "name", "description", "priority", "date"];
  for (let id of ids) {
    taskObject[`${id}`] = document.getElementById(`${id}`).value;
  }
  taskOperations.addTask(taskObject);
  showTasks();
}

function showTasks() {
  const taskDiv = document.getElementById("alltasks");
  taskDiv.innerHTML = "";
  taskOperations.tasks.map((taskObject) => printCard(taskObject, taskDiv));
}

function printCard(taskObject, taskDiv) {
  //   const card = ` <div class="card p-2" style="width: 18rem;">
  //   <div class="card-body">
  //     <h5 class="card-title">${taskObject.id}</h5>
  //     <h6 class="card-subtitle mb-2 text-body-secondary">${taskObject.name}</h6>
  //     <p class="card-text">${taskObject.description}</p>
  //     <p class="card-text">${taskObject.priority}</p>
  //     <p class="card-text">${taskObject.date}</p>
  //     <button id="edit-btn" class="btn btn-primary" ><i class="fa-solid fa-pen" ></i></button>
  //     <button id="delete-btn" class="btn btn-danger" onclick="deleteTask()"><i class="fa-solid fa-trash"></i></button>
  //   </div>
  // </div>`;
  // taskDiv.innerHTML += card;
  const card = document.createElement("div");
  card.className = "card p-2";
  card.style = "width: 18rem;";
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const h5Tag = document.createElement("h5");
  h5Tag.className = "card-title";
  h5Tag.innerText = taskObject.id;
  const h6Tag = document.createElement("h6");
  h6Tag.className = "card-subtitle mb-2 text-body-secondary";
  h6Tag.innerText = taskObject.name;
  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = taskObject.description;
  const priority = document.createElement("p");
  priority.className = "card-text";
  priority.innerText = taskObject.priority;
  const date = document.createElement("p");
  date.className = "card-text";
  date.innerText = taskObject.date;
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary";
  editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  editButton.addEventListener("click", () => edit(taskObject.id));
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteButton.addEventListener("click", () => deleteTask(taskObject.id));
  cardBody.appendChild(h5Tag);
  cardBody.appendChild(h6Tag);
  cardBody.appendChild(description);
  cardBody.appendChild(priority);
  cardBody.appendChild(date);
  cardBody.appendChild(editButton);
  cardBody.appendChild(deleteButton);
  card.appendChild(cardBody);
  taskDiv.appendChild(card);
}

function edit(id) {
  const taskToEdit = taskOperations.findTask(id);
  const ids = ["id", "name", "description", "priority", "date"];
  for (let id of ids) {
    document.getElementById(`${id}`).value = taskToEdit[`${id}`];
  }
}

function editTask() {
  const taskObject = {};
  const ids = ["id", "name", "description", "priority", "date"];
  for (let id of ids) {
    taskObject[`${id}`] = document.getElementById(`${id}`).value;
  }

  console.log("Object", taskObject);

  taskOperations.editTask(taskObject);
  showTasks();
}

function deleteTask(id) {
  taskOperations.deleteTask(id);
  showTasks();
}
