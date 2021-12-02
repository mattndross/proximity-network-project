import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App";
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductsList";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
