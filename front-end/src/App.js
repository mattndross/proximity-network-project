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
import Modalregister from './components/ModalRegister';
import ProfileUserStore from './pages/ProfileUserStore';
import ProfileUserProduct from './pages/ProfileUserProduct';

// import global context
import { SearchContext } from './context/SearchContext.js'
import { ProfileContext } from './context/ProfileContext'

function App() {
  // Variable global que se modificara en el componente search de la landing !
  const [searchGlobal, setSearchGlobal] = useState('')
  // variable global para mandar los datos de una tienda!
  const [storeProfileId, setStoreProfileId] = useState('')


  return (
    <div className="wrapper">
      <BrowserRouter>
        {<Header />}
        <Modalregister></Modalregister>
        <LoginModal></LoginModal>
        <SearchContext.Provider value={[searchGlobal, setSearchGlobal]}>
          <ProfileContext.Provider value={[storeProfileId, setStoreProfileId]}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/stores-list" element={<StoresList />} />
              <Route path="/store-profile" element={<StoreProfile />} />
              <Route path="/profile-user" element={<ProfileUserStore />} />
              <Route path="/profile-product" element={<ProfileUserProduct />} />
            </Routes>
          </ProfileContext.Provider>
        </SearchContext.Provider>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
