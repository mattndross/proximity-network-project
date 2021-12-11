import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle"
import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
import Footer from "./components/Footer"
import Header from "./components/Header"
import StoreProfile from "./pages/StoreProfile";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        {<Header />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores-list" element={<StoresList />} />

          <Route path="/store-profile" element={
            <StoreProfile />} />


        </Routes>
        {<Footer />}
      </BrowserRouter>

    </div>
  );
}
export default App;
