import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App";
import "./index.css"
import LandingPage from "./pages/LandingPage";
import StoreList from "./pages/StoreList";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<StoreList />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
