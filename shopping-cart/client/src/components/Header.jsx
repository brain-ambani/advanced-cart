import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
};
