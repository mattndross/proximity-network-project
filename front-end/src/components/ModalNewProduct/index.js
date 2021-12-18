import "./ModalNewProduct.css"

const ModalNewProduct = () => {
    return (
        <div className="modal fade" id="modalNewProduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title modal-product-h5" id="exampleModalLabel">New product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-new-product-body">
                        <div className='container pt-3'>
                            <h2>LOAD A NEW PRODUCT</h2>
                            <p>All fields marked with <span> * </span>are required</p>
                            <form className="form-new-product">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Product name<span>* </span></label>
                                    <input type="text" className="form-control input-product-user" aria-label="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputBrand1" className="form-label">Brand<span>* </span></label>
                                    <input type="email" className="form-control input-product-user" id="inputBrand" aria-describedby="emailHelp" />
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputUnit1" className="form-label ">Unit<span>* </span></label>
                                        <input type="text" className="form-control input-product-user" id="inputUnit" />
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputPrice1" className="form-label">Price<span>* </span></label>
                                        <input type="text" className="form-control input-product-user" style={{ width: "95%" }} id="inputPrice" />
                                    </div>
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputProducer1" className="form-label">Producer/Manufacturer<span>* </span></label>
                                        <input type="text" className="form-control input-product-user" id="inputProducer" />
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputOrigin1" className="form-label">Origin<span>* </span></label>
                                        <input type="text" className="form-control input-product-user" style={{ width: "95%" }} id="inputOrigin" />
                                    </div>
                                    <div className="mb-3" style={{ paddingRight: "0" }}>
                                        <label htmlFor="message-text" className="col-form-label">Description<span>* </span></label>
                                        <textarea className="form-control input-product-user" id="message-text"></textarea>
                                    </div>
                                    <div className="mb-3 d-flex flex-column">
                                        <label htmlFor="image" className="col-form-label">Image<span>* </span></label>
                                        <div className="icon-product-modal text-center">
                                            <i className="bi bi-camera"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: "30px" }}>
                                    <button className="btn btn-outline-success btn-modal-product" type="submit">Upload product</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNewProduct;