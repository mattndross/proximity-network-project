import './SearchListProduct.css'
import Search from '../BaseComponents/Search';

const SearchListProduct = () => {
    return (
        <div className="container search-list-product">
            <div className="row align-items-center">
                <div className="col-md-5 title-product">
                    <h1>Store products</h1>
                </div>
                <div className="col-md-7 px-4">
                    <div className='container-search'>
                        <Search></Search>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchListProduct;