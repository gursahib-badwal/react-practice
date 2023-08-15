import { useState } from "react";

export default function Task(props) {
  const [tempInput, setTempInput] = useState(props.title);
  //This temp state was required to store the edited value temporarily before the update button is clicked
  function editing(event) {
    setTempInput(event.target.value);
  } //This line of code updates the input field as the user types
  //From next time remember to handle the event related stuff within the same component by
  //storing those changes in a new state variable and then maybe passing that state to the parent component like we do in updateClick

  function update_click() {
    props.onUpdate(tempInput);
  } //This is the code that exectures when the user clicks the update button
  // and the final editied value is passed to the parent component

  return (
    <div>
      {/* <h2>{props.title}</h2> */}
      <input value={tempInput} onChange={(event) => editing(event)}></input>
      <button className="delete" onClick={() => props.onDelete()}>
        Delete
      </button>
      <button className="update" onClick={update_click}>
        Update
      </button>
    </div>
  );
}
