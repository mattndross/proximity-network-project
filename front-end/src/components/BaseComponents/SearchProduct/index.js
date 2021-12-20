
import React, { useState } from "react"

import './SearchProduct.css'
const Search = ({ productsStore, setProductsStore, filteredProducts, setFilteredProducts }) => {

    // Copia del estado productStore con toda la data.
    let productStoreCopy = [...productsStore];
    let productStoreFiltered = []  // Almacenara los datos filtrados.


    const [searchLocalValue, setSearchLocalValue] = useState("");

    // MEtodo para buscar coincidencias mientras tipeamos.
    const handleSearchLocalValue = (event) => {



        const inputValue = event.target.value.toLowerCase();
        setSearchLocalValue(event.target.value)
        if (inputValue === "") {


            setFilteredProducts([...productsStore])
            return;
        }


        productStoreFiltered = productStoreCopy.filter((product) => {
            // console.log(product.category)
            return product.category.toLowerCase().search(inputValue) !== -1 || product["product_type"].toLowerCase().search(inputValue) !== -1 || product.brand.toLowerCase().search(inputValue) !== -1
        })

        console.log("FILTRADOS", productStoreFiltered)
        console.log("REAL", productStoreCopy)

        setFilteredProducts(productStoreFiltered)
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
