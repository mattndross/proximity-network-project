import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle"
import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
import Footer from "./components/Footer"
import Header from "./components/Header"
import StoreProfile from "./pages/StoreProfile";
import LoginModal from './components/LoginModal'
// import global context
import { Context } from './context/SearchContext.js'

function App() {
  // Variable global que se modificara en el componente search de la landing !


  const [searchGlobal, setSearchGlobal] = useState('')

  return (
    <div className="wrapper">
      <BrowserRouter>
        {<Header />}
        <LoginModal></LoginModal>
        <Context.Provider value={[searchGlobal, setSearchGlobal]}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/stores-list" element={<StoresList />} />
            <Route path="/store-profile" element={
              <StoreProfile />} />
          </Routes>
        </Context.Provider>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
