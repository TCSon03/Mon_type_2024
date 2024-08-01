import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "./../reducers/productReducer";

export const ProductContext = createContext(1);

const ProductProvider = ({ chirdren }) => {
  const [state, dispatch] = useReducer(productReducer, { prodcuts: [] });
  useEffect(() => {}, []);
  return <ProductContext.Provider>{chirdren}</ProductContext.Provider>;
};
export default ProductProvider;
