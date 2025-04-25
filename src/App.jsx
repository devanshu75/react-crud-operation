import "./App.css";

import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

const DATA = [];

function App() {
  const [tasks, setTasks] = useState(DATA);

  let listTask = tasks.map((task) => (
    <TaskList
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    const updatedTask = [newTask, ...tasks];
    setTasks(updatedTask);
    localStorage.setItem("Tasks", JSON.stringify(updatedTask));
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
    localStorage.setItem("Tasks", JSON.stringify(remainingTasks));
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
    localStorage.setItem("Tasks", JSON.stringify(editedTaskList));
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="poppins-semibold title">CRUD OPERATION</h1>
      <Form addTask={addTask} />
      <div className="taskList-container">
        {tasks.length === 0 ? (
          <p className="no-task-message">Add a task</p>
        ) : (
          <ul className="todo-list">{listTask}</ul>
        )}
      </div>
    </div>
  );
}

export default App;
