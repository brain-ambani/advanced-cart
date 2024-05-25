import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-slate-700 text-white ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
