import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Toaster } from 'react-hot-toast';
import { ProfileContext } from './context/ProfileContext'
import PrivateRoute from './components/PrivateRoute';
import GenericError from './components/GernericError';




function App() {

  // Context para el name del usuario..
  const [storeProfileId, setStoreProfileId] = useState(localStorage.getItem("storeName"))



  return (
    <div className="wrapper">

      <BrowserRouter>


        <ProfileContext.Provider value={[storeProfileId, setStoreProfileId]}>
          {<Header />}

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
            <Route path="*" element={<GenericError/>}/>
          </Routes>
        </ProfileContext.Provider>


        <Footer />
      </BrowserRouter>
    </div>
  )
}

const Public = () => <div>public</div>



export default App;








