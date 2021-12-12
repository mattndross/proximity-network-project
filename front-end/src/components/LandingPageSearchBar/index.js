

import "./LandingPageSearchBar.css";
import iconSearch from "../../assets/img/search-landing/icon-search.png"
import imagenSearch from "../../assets/img/search-landing/imagen-search.png"
import { useState, useContext } from "react"

import { Context } from '../../context/SearchContext'


const LandingPageSearchBar = () => {
  // Haciendo uso del context para modificarlo, con la data del search!!
  const [searchGlobal, setSearchGlobal] = useContext(Context)
  const [searchType, setSearchType] = useState(null);
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
    setSearchGlobal({
      type: searchType,
      value: searchLocalValue
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
                  <di className="search-postal">
                    <select class="form-select" onChange={handleChangeSearchType} value={searchType} aria-label="Default select example">

                      <option value="city" selected>Search by City</option>
                      <option value="postal">Search by postal code</option>
                    </select>
                  </di>
                </div>
                <div className="col-6 content-search-city-postal">
                  <div className=" search-city-postal">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="city or zip code" value={searchLocalValue} onChange={handleSearchLocalValue} />
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