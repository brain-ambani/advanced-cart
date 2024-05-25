import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { data } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {data.map((data, index) => (
        <div key={index}>
          <p>{data.name}</p>
          <p>{data.price}</p>
        </div>
      ))}
    </div>
  );
}
