import React from "react"
import icon_search from "../SearchBar/images/icon_search.png"
import img_banner from "../SearchBar/images/img_banner_search.png"
import Search from "./index"
import "./SearchBar.css"





function SearchBar() {
  return (
    <>
      <div className="bgImageText" >
        <div className="bgImageRight" style={{ backgroundImage: `url(${icon_search})`, backgroundRepeat: "no-repeat", height: "230px", width: "255px", float: "right", marginRight: "300px", marginTop: "50px" }}>
        </div>

        <div className="bgImageLeft" style={{ backgroundImage: `url(${img_banner})`, backgroundRepeat: "no-repeat", height: "650px", backgroundPosition: "left", marginLeft: "100px" }}>
        </div>
          <div className="text">
            <h2 className="searchText">Find <span>the best organic stores in your <br/>city</span>, with quality products.</h2>
          </div>
          < Search />
      </div>
    </>







  )
}

export default SearchBar








            
            
