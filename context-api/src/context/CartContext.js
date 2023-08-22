import { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const temp_arr = [{ item: "Apple" }, { item: "Cake" }, { item: "Coffee" }];
  const [items, setItems] = useState(temp_arr);

  useEffect(() => {
    console.log(items);
  }, [items]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(index) {
    const updated_items = items.filter((obj, i) => {
      return !(i === index); //When i = index then the false would be returned and hence that object will be skipped
    });

    setItems(updated_items);
  }

  function updateItem(new_item, index) {
    const updated_items = items.map((obj, i) => {
      if (i === index) {
        return { ...obj, item: new_item };
      } else {
        return obj;
      }
    });
    setItems(updated_items);
  }

  const contextValue = {
    items,
    setItems,
    addItem,
    deleteItem,
    updateItem,
  };

  return (
    <div>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </div>
  );
}

export { Context, ContextProvider };
