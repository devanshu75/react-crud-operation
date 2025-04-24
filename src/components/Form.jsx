import React from "react";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name)
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input 
        type="text" 
        className="addTask" 
        placeholder="Enter the task" 
        name="text"
        value={name}
        onChange={handleChange}
        />
      <button className="btn btn-add" type="submit" role="button">
        Add
      </button>
    </form>
  );
};

export default Form;
