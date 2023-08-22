import { Context } from "../context/CartContext";
import Item from "./Item";
import ItemForm from "./ItemForm";
import { useContext } from "react";

export default function CartItems() {
  const { items } = useContext(Context);

  const displayItems = items.map((obj, index) => {
    return <Item key={index} item={obj.item} id={index} />;
  });

  return (
    <div>
      <h1>Cart Items</h1>
      {displayItems}
      <ItemForm />
    </div>
  );
}
