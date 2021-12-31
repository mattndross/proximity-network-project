
import React, { useState, useContext } from "react"
import { SearchContext } from '../../../context/SearchContext'
import { createSearchParams, useNavigate } from "react-router-dom";
import './Search.css'
const Search = ({ loading, setLoading }) => {
    const [searchLocalValue, setSearchLocalValue] = useState("");

    let navigate = useNavigate();

    const handleSearchLocalValue = (event) => {
        setSearchLocalValue(event.target.value)


    }

    const handleSearch = (event) => {
        event.preventDefault();

        // Formando el queryParms que me llevara a /stores-list?search="....."
        navigate(
            {
                pathname: '/stores-list',
                search: `?${createSearchParams({
                    search: searchLocalValue
                })}`
            })


    }

    return (

        <div className="form-group has-search">
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col-8 col-lg-6" style={{ paddingRight: "0px" }}>
                        <span className="form-control-feedback" ><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control" placeholder="Perform a new" value={searchLocalValue} onChange={handleSearchLocalValue} />
                        <div>

                        </div>
                    </div>
                    <div className="col-4 col-lg-6" style={{ paddingLeft: "0px" }}>
                        <button type="submit" class="btn btn-primary" id="searchButton">Search</button>
                    </div>
                </div>


            </form>
        </div>

    )
}

export default Search
