import { BrowserRouter, Routes, Route } from "react-router-dom";



import "./App";
import SearchBar from "./components/SearchBar/SearchBar";

import LandingPage from "./pages/LandingPage";
import StoresList from "./pages/StoresList";
 
import Header from "./components/Header"

import StoreProfile from "./pages/StoreProfile";







function App() {
  return (
    <div className="wrapper">
      {<Header/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/stores-list" element={<StoresList />} />


          <Route path="/store-profile" element={
            <StoreProfile />} />


          <Route path="/products" element={<ProductList />} />

        </Routes>
         <SearchBar />
      </BrowserRouter>
    </div>
  );
}
export default App;
