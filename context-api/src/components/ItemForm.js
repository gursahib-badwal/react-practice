import { useState, useContext } from "react";
import { Context } from "../context/CartContext";

export default function ItemForm() {
  const [temp, setTemp] = useState("");

  const { addItem } = useContext(Context);

  function add_temp() {
    const add_object = { item: temp };
    addItem(add_object);
    setTemp("");
  }

  return (
    <div>
      <h1>Item Form</h1>
      <label>Item: </label>
      <input onChange={(e) => setTemp(e.target.value)} value={temp}></input>
      <button onClick={() => add_temp()}>Submit</button>
    </div>
  );
}
