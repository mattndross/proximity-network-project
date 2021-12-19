
import React, { useState, useContext } from "react"

import './SearchProduct.css'
const Search = ({ productsStore, setProductsStore, allProducts }) => {
    const productStoreCopy = [...productsStore];



    const [searchLocalValue, setSearchLocalValue] = useState("");


    const handleSearchLocalValue = (event) => {
        const inputValue = event.target.value.toLowerCase();
        setSearchLocalValue(event.target.value)
        console.log(typeof inputValue)
        if (inputValue === "") {

            setProductsStore(allProducts)
            return;
        }

        const productStoreFiltered = productStoreCopy.filter((product) => {
            // console.log(product.category)
            return product.category.toLowerCase().includes(inputValue)
        })

        // console.log(productStoreFiltered)
        setProductsStore(productStoreFiltered)

        console.log(allProducts)


    }



    return (

        <div className="form-group has-search">
            <span className="form-control-feedback"><i className="bi bi-search"></i></span>
            <input type="text" className="form-control-product" placeholder="Search for a product" id="" value={searchLocalValue}
                onChange={handleSearchLocalValue} />
        </div>

    )
}

export default Search
