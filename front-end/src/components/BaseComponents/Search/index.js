
import React, { useState, useContext } from "react"
import { SearchContext } from '../../../context/SearchContext'
import './Search.css'
const Search = ({ setSearchGlobal, searchGlobal }) => {

    const [searchContextGlobal, setSearchContextGlobal] = useContext(SearchContext)

    const [searchLocalValue, setSearchLocalValue] = useState("");

    const handleSearchLocalValue = (event) => {
        setSearchLocalValue(event.target.value)
        setSearchContextGlobal(event.target.value)
        console.log(searchLocalValue)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchGlobal(searchLocalValue)


    }

    return (

        <div className="form-group has-search">
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col-6">
                        <span className="form-control-feedback"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" value={searchLocalValue} onChange={handleSearchLocalValue} />
                    </div>
                    <div className="col-6">
                        <button type="submit" class="btn btn-primary" id="searchButton">Perform a search</button>
                    </div>
                </div>


            </form>
        </div>

    )
}

export default Search
