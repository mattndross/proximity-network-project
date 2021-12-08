import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductsList";
import Header from "./components/Header"
=======
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App";
import "./index.css"
import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
>>>>>>> eccb1afc4b03dfa138732d8f3ef4694fe2987c65

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores-list" element={<StoresList />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
