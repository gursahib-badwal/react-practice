import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const temp_arr = [{ color: "red" }, { color: "blue" }, { color: "green" }];
  const [items, setItems] = useState(temp_arr);

  return (
    <div>
      <Context.Provider value={[items, setItems]}>{children}</Context.Provider>
    </div>
  );
}

export { Context, ContextProvider };
