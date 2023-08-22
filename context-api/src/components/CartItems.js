import { Context } from "../context/CartContext";
import { useContext } from "react";

export default function CartItems() {
  const [items, setItems] = useContext(Context);

  const displayItems = items.map((item) => {
    return <h1>{item.color}</h1>;
  });
  return (
    <div>
      <h1>Cart Items</h1>
      {displayItems}
    </div>
  );
}
