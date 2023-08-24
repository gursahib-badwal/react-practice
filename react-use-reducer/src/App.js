import { useReducer } from "react";

function App() {
  const intialState = 0;

  const [count, dispatch] = useReducer(countReducer, intialState);

  function countReducer(count, action) {
    switch (action.type) {
      case "increment":
        return count + 1;

      case "decrement":
        return count - 1;

      default:
        return count;
    }
  }

  function handleIncrease() {
    dispatch({
      type: "increment",
    });
  }

  function handleDecrease() {
    dispatch({
      type: "decrement",
    });
  }

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
