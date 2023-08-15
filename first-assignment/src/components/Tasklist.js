import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const localArray = JSON.parse(localStorage.getItem("array"));
    if (localArray) {
      setArray(localArray);
    }
  }, []);

  function addTask(new_obj) {
    setArray([...array, new_obj]);
    // console.log(array);
    localStorage.setItem("array", JSON.stringify([...array, new_obj]));
  }

  function deleteTask(index) {
    const updated_array = array.filter((_, i) => i !== index);
    setArray(updated_array);
    localStorage.setItem("array", JSON.stringify(updated_array));
  }

  function updateTask(new_title, index) {
    const updated_array = array.map((obj, i) => {
      if (i === index) {
        return { ...obj, title: new_title };
      } else {
        return obj;
      }
    });
    setArray(updated_array);
    localStorage.setItem("array", JSON.stringify(updated_array));
    // console.log(array);
  }

  const display_array = array.map((obj, index) => {
    return (
      <Task
        key={index}
        title={obj.title}
        onDelete={() => deleteTask(index)}
        onUpdate={(new_title) => updateTask(new_title, index)}
      />
    );
  });
  return (
    <div>
      {/* <h1>Task 1 here</h1> */}
      {display_array}
      <TaskForm add_task={addTask} />
    </div>
  );
}
