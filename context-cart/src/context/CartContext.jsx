import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState([]);

  const addToCart = (name, price) => {
    setData((prevItems) => [...prevItems, { name, price }]);
  };
  return (
    <CartContext.Provider value={{ data, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
