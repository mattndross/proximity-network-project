import "./SearchStoresList.css"
import Search from "../BaseComponents/Search";
const SearchStoresList = ({ loading, setLoading }) => {
    return (
        <section id="searchStoresList" style={{ backgroundColor: "#F1EEE7" }}>
            <div className="container">
                <div className="row search-content">
                    <div className="col-lg-8 ">
                        <Search loading={loading} setLoading={setLoading}></Search>
                    </div>
                    <div className="col-lg-4 stores-list-text">
                        <p>100% organic, quality products.<span className="d-block">Ecofriendly</span></p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SearchStoresList;