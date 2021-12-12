import "./LandingPageSearchBar.css";
import iconSearch from "../../assets/img/search-landing/icon-search.png"
import imagenSearch from "../../assets/img/search-landing/imagen-search.png"
const LandingPageSearchBar = () => {
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
            <form className="text-center">
              <div className="row search-form">
                <div className=" col-6 content-search-postal">
                  <di className="search-postal">
                    <i class="bi bi-search"></i>
                    <input type="number" placeholder="Search by zip code" />
                  </di>
                </div>
                <div className="col-6 content-search-city">
                  <div className=" search-city">
                    <i class="bi bi-geo-alt-fill"></i>
                    <input type="text" placeholder="Search by city" />
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