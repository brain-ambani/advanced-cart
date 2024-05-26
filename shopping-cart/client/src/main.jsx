import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
