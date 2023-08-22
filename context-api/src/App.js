import CartItems from "./components/CartItems";
import { ContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CartItems />
      </ContextProvider>
    </div>
  );
}

export default App;
