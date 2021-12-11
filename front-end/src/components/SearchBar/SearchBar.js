import React from "react"
import icon_search from "../SearchBar/images/icon_search.png"
import img_banner from "../SearchBar/images/img_banner_search.png"
import "./SearchBar.css"
import Search from "./index"





function SearchBar() {
  return (
    <>
      <div className="bgImageText" >
        <div className="bgImageRight" style={{ backgroundImage: `url(${icon_search})`, backgroundRepeat: "no-repeat", height: "230px", width: "255px", float: "right", marginRight: "300px", marginTop: "50px" }}>
        </div>

        <div className="bgImageLeft" style={{ backgroundImage: `url(${img_banner})`, backgroundRepeat: "no-repeat", height: "650px", backgroundPosition: "left", marginLeft: "100px" }}>
          <div className="text">
            <h2 className="searchText">Find the best organic stores in your city, with quality products.</h2>
            < Search />
            
          </div>
        </div>
      </div>
    </>







  )
}

export default SearchBar








