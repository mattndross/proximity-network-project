import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <form >
            <div className="form-group has-search">
                <span className="form-control-feedback"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </form>
    )
}

export default Search
