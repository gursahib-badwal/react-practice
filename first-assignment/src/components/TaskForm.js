import { useState } from "react";

export default function TaskForm(props) {
  const [formInput, setFormInput] = useState("");

  function handleClick() {
    const obj = { title: formInput };
    props.add_task(obj);
    setFormInput("");
  }

  return (
    <div>
      <h1>Task Form</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={formInput}
        onChange={(event) => setFormInput(event.target.value)} //This line of code updates the input field as the user types
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
//checking
