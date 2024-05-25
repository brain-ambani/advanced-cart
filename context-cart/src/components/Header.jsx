import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className=" shadow-md p-4 fixed w-full bg-slate-800">
      <div className="w-[80%] mx-auto pt-4 ">
        <ul className="flex justify-between text-xl  uppercase ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
