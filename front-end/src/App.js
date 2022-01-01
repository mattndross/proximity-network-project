import { useState } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle"
import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
import Footer from "./components/Footer"
import Header from "./components/Header"
import StoreProfile from "./pages/StoreProfile";

import ProfileUserStore from './pages/ProfileUserStore';
import ProfileUserProduct from './pages/ProfileUserProduct';
import ProfileUserAccount from './pages/ProfileUserAccount';

// import global context
import { SearchContext } from './context/SearchContext.js'
import { ProfileContext } from './context/ProfileContext'
import PrivateRoute from './components/PrivateRoute';





function App() {
  // Variable global que se modificara en el componente search de la landing !
  const [searchGlobal, setSearchGlobal] = useState('')
  // variable global para mandar los datos de una tienda!
  const [storeProfileId, setStoreProfileId] = useState('')



  return (
    <div className="wrapper">
      <BrowserRouter>

        <SearchContext.Provider value={[searchGlobal, setSearchGlobal]}>
          {<Header />}

          <ProfileContext.Provider value={[storeProfileId, setStoreProfileId]}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/stores-list" element={<StoresList />} />
              <Route path="/store-profile/:storeName" element={<StoreProfile />} />
              <Route path="/" element={<Public />} />
              <Route path="/profile-account" element={
                <PrivateRoute>
                  <ProfileUserAccount />
                </PrivateRoute>} />
              <Route path="/profile-user" element={
                <PrivateRoute>
                  <ProfileUserStore />
                </PrivateRoute>} />

              <Route path="/profile-product" element={
                <PrivateRoute>
                  <ProfileUserProduct />
                </PrivateRoute>} />
              <Route path="/" element={<Public />} />

            </Routes>
          </ProfileContext.Provider>
        </SearchContext.Provider>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

const Public = () => <div>public</div>



export default App;








