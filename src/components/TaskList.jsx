import React from "react";
import { useState } from "react";

const TaskList = ({
  id,
  name,
  completed,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}) => {

  
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      editTask(id, newName.trim());
      setIsEditing(false);
    }
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="todo-edit-form">
      <input
        type="text"
        value={newName}
        onChange={handleChange}
        className="editTask"
        autoFocus
      />

      <div className="btn-group">
        <button type="submit" className="btn btn-save">
          Save
        </button>
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <>
      <div className="todo-name">
        <input
          className="todo-check"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label">{name}</label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default TaskList;
