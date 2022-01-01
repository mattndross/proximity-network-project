

import "./LandingPageSearchBar.css";
import iconSearch from "../../assets/img/search-landing/icon-search.png"
import imagenSearch from "../../assets/img/search-landing/imagen-search.png"
import { useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom";

const LandingPageSearchBar = () => {
  let navigate = useNavigate();

  const [searchType, setSearchType] = useState("");
  const [searchLocalValue, setSearchLocalValue] = useState("");
  // Método para obtener el search Value
  const handleSearchLocalValue = (event) => {
    setSearchLocalValue(event.target.value)
    console.log(searchLocalValue)
  }

  const handleChangeSearchType = (event) => {
    setSearchType(event.target.value)
    console.log(searchType)
  }


  const replaceSearchGlobal = (event) => {
    event.preventDefault()



    navigate(
      {
        pathname: '/stores-list',
        search: `?${createSearchParams({
          search: searchLocalValue
        })}`
      })

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
            <form className="text-center" onSubmit={replaceSearchGlobal}>
              <div className="row search-form">
                <div className=" col-6 content-select">
                  <div className="search-postal">
                    <select className="form-select" onChange={handleChangeSearchType} value={searchType} aria-label="Default select example">

                      <option value="city" >Search by City</option>
                      <option value="postal">Search by postal code</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 content-search-city-postal">
                  <div className=" search-city-postal">
                    <i className="bi bi-search"></i>
                    <input type="text" required placeholder="city or zip code" value={searchLocalValue} onChange={handleSearchLocalValue} />
                  </div>
                </div>
              </div>
              <button className="btn-from" >Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageSearchBar;

// selected