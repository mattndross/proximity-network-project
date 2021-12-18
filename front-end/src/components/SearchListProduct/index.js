import './SearchListProduct.css'
import SearchProduct from '../BaseComponents/SearchProduct';

const SearchListProduct = ({ productsStore, setProductsStore, allProducts }) => {
    return (
        <div className="container search-list-product">
            <div className="row align-items-center">
                <div className="col-md-5 title-product">
                    <h1>Store products</h1>
                </div>
                <div className="col-md-7 px-4">
                    <div className='container-search'>
                        <SearchProduct productsStore={productsStore} setProductsStore={setProductsStore} allProducts={allProducts} ></SearchProduct>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchListProduct;