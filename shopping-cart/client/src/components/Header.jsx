import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

export const Header = () => {
  const { cart } = useContext(cartContext);
  return (
    <Header className="text-sky-400">
      <ul>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div>{cart}</div>
    </Header>
  );
};
