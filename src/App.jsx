import "./App.css";

import { nanoid } from "nanoid";

import { useState } from "react";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

const DATA = [
  {
    id: `todo-${nanoid()}`,
    name: "Eat",
    completed: false,
  },
  {
    id: `todo-${nanoid()}`,
    name: "Sleep",
    completed: false,
  },
  {
    id: `todo-${nanoid()}`,
    name: "Study",
    completed: false,
  },
  {
    id: `todo-${nanoid()}`,
    name: "Exercise",
    completed: false,
  },
];

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
      editTask = {editTask}
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task)=> id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  

  return (
    <div className="container">
      <h1 className="poppins-semibold title">CRUD OPERATION</h1>
      <Form addTask={addTask} />
      <div className="taskList-container">
        <ul className="todo-list">{listTask}</ul>
      </div>
    </div>
  );
}

export default App;
