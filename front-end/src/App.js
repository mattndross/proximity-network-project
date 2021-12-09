import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
import Header from "./components/Header"

function App() {
  return (
    <div className="wrapper">
      {<Header/>}
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
