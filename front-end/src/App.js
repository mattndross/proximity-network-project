import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductsList";
import Header from "./components/Header"

function App() {
  return (
    <div className="wrapper">
      <Header/>
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
