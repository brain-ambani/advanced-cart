import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { data } = useContext(CartContext);
  return (
    <nav className=" shadow-md p-4 fixed w-full bg-slate-800">
      <div className="w-[80%] mx-auto pt-4 top-0">
        <ul className="flex justify-between text-xl  uppercase ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart <span>{data.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
