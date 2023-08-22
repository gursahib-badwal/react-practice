import { useContext, useState } from "react";
import { Context } from "../context/CartContext";

export default function Item(props) {
  const { deleteItem } = useContext(Context);
  const { updateItem } = useContext(Context);

  const [temp, setTemp] = useState(props.item);

  return (
    <div>
      <input value={temp} onChange={(e) => setTemp(e.target.value)}></input>
      <button onClick={() => deleteItem(props.id)}>Delete</button>
      <button onClick={() => updateItem(temp, props.id)}>Update</button>
    </div>
  );
}
