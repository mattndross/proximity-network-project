

import "./LandingPageSearchBar.css";
import iconSearch from "../../assets/img/search-landing/icon-search.png"
import imagenSearch from "../../assets/img/search-landing/imagen-search.png"
import { useState } from "react"




const LandingPageSearchBar = () => {
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("ere");

  const handleChangeCity = (event) => {
    setCity(event.target.value)
    console.log(city)
  }

  const searchStores = (event) => {
    event.preventDefault()
    console.log(city, postal)


  }
  return (
    <section id="searchLanding" className="search-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="image-search">
              <img src={imagenSearch} className="w-100" alt="imagen del buscador" />
            </div>
          </div>
          <div className="col-lg-6 search-text">
            <div className="search-icon">
              <img src={iconSearch} className="img-fluid" alt="icono del buscador" />
            </div>
            <h2>Find <span>the best organic stores in your city</span>, with quality products.</h2>
            <form className="text-center" onSubmit={searchStores}>
              <div className="row search-form">
                <div className=" col-6 content-select">
                  <di className="search-postal">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select search by</option>
                      <option value="1">City</option>
                      <option value="2">Postal code</option>
                    </select>
                  </di>
                </div>
                <div className="col-6 content-search-city-postal">
                  <div className=" search-city-postal">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="city or zip code" value={city} onChange={handleChangeCity} />
                  </div>
                </div>
              </div>
              <button className="btn-from">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageSearchBar;