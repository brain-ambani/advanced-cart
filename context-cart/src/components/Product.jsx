import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const data = [
  {
    id: 0,
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 1,
    name: "Product 2",
    price: 200,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Product 3",
    price: 300,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Product 4",
    price: 400,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Product 5",
    price: 500,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Product 6",
    price: 600,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Product 7",
    price: 700,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 7,
    name: "Product 8",
    price: 800,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 8,
    name: "Product 9",
    price: 900,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 9,
    name: "Product 10",
    price: 1000,
    image: "https://via.placeholder.com/200",
  },
];

export default function Product() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-[230px] p-2 m-1  flex flex-col items-center justify-evenly gap-3 bg-slate-800 text-white rounded-md"
          >
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div className="flex items-center justify-between text-lg gap-2">
              <button
                className="bg-slate-700 py-1 px-4 rounded-sm hover:bg-slate-400"
                onClick={() => addToCart(product.name, product.price)}
              >
                +
              </button>
              <h2>10</h2>
              <button className="bg-slate-700 py-1 px-4 rounded-sm hover:bg-slate-400">
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
