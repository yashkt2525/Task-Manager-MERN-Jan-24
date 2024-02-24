import { TaskModel } from "../model/Model.js";

export const taskOperations = {
  tasks: [],
  addTask(taskObject) {
    taskObject = new TaskModel(
      taskObject.id,
      taskObject.name,
      taskObject.description,
      taskObject.priority,
      taskObject.date
    );
    const taskIndex = this.tasks.findIndex((t) => t.id === taskObject.id);
    if (taskIndex !== -1) {
      alert("Can Not Add Task With same Id please change the Id");
    } else {
      this.tasks.push(taskObject);
    }
  },
  deleteTask(id) {
    this.tasks = this.tasks.filter((taskObject) => taskObject.id !== id);
  },
  findTask(id) {
    return this.tasks.find((taskObject) => taskObject.id === id);
  },
  editTask(taskObject) {
    console.log("Hello Task", taskObject);
    const taskIndex = this.tasks.findIndex((t) => t.id === taskObject.id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1, taskObject);
    } else {
      alert("Task Not Found");
    }
  },
};
