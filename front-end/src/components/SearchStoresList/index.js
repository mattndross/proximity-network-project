import "./SearchStoresList.css"

const SearchStoresList = () => {
    return (
        <section id="searchStoresList" style={{ backgroundColor: "#F1EEE7" }}>
            <div className="container">
                <div className="row search-content">
                    <div className="col-lg-8 ">
                        <form >
                            <div className="form-group has-search">
                                <span className="form-control-feedback"><i class="bi bi-search"></i></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>
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