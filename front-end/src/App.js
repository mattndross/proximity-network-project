import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
 //>>>Header
import Header from "./components/Header"

import StoreProfile from "./pages/StoreProfile";
//>>> main

function App() {
  return (
    <div className="wrapper">
      {<Header/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores-list" element={<StoresList />} />
 //>>>Header

          <Route path="/store-profile" element={
            <StoreProfile />} />

//>>>main
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
