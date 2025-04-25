import React from "react";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      console.log("Field Cannot be empty");
      setError(true);
    } else {
      props.addTask(name);
      setName("");
      setError(false);
    }
  }

  function handleChange(event) {
    setError(false);
    setName(event.target.value);
  }

  return (
    <>
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
        {error && <p className="error-message">Field Cannot be empty</p>}
      </form>
    </>
  );
};

export default Form;
