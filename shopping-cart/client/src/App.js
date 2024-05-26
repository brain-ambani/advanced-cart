import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
