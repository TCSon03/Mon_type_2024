import { useContext } from "react";
import "./App.css";
import { ProductContext } from "./context/ProductContext";

function App() {
  const data = useContext(ProductContext);
  console.log(data);
  return <></>;
}

export default App;
