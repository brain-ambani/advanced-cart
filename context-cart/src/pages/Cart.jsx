import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { data } = useContext(CartContext);

  return (
    <div className="w-3/4 mx-auto pt-24">
      <h1 className="text-2xl mb-6 text-center">Cart</h1>

      <div className="flex justify-between items-center ">
        <div>
          {data.map((data, index) => (
            <div
              key={index}
              className="bg-slate-900 mb-2 w-[350px] rounded-md shadow-md p-2 flex justify-between"
            >
              <div className=" gap-4">
                <p>{data.name}</p>
                <p>{data.price}</p>
              </div>
              <button className="text-red-700 font-semibold ">X</button>
            </div>
          ))}
        </div>
        <div className="">Stripe Checkout</div>
      </div>
    </div>
  );
}
