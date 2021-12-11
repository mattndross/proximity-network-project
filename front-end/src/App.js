import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App";
import SearchBar from "./components/SearchBar/SearchBar";
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
         <SearchBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
