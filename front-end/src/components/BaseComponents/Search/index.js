
import React, { useState, useContext } from "react"
import { Context } from '../../../context/SearchContext'
import './Search.css'
const Search = () => {


    const [searchGlobal, setSearchGlobal] = useContext(Context)
    console.log(searchGlobal)
    const [searchLocalValue, setSearchLocalValue] = useState("");

    const handleSearchLocalValue = (event) => {
        setSearchLocalValue(event.target.value)
        console.log(searchLocalValue)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchGlobal(searchLocalValue)


    }

    return (

        <div className="form-group has-search">
            <form onSubmit={handleSearch}>

                <span className="form-control-feedback"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control" placeholder="Search" value={searchLocalValue} onChange={handleSearchLocalValue} />
                <button type="submit">button</button>
            </form>
        </div>

    )
}

export default Search
