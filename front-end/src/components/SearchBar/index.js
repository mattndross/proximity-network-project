import React, { useState } from "react";
import "./SearchBar.css";


const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    //console.log(searchInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchInput)
  };


  return (
    <div className="search">
      <div className="page-header">
        
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
          
            <div className="search-row">
              <input
                type="text" 
                id="customerName"
                className="form-control"
                placeholder="Busca por ciudad o codigo postal"
                value={searchInput}
                onChange={handleSearchInput}
              />
            </div>
          </form>
          <button className="btn btn-primary" onClick={handleSubmit}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Search;