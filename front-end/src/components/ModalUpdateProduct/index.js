import './ModalUpdateProduct.css'

const ModalUpdateProduct = ({ id }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title modal-update-product-h5" id="exampleModalLabel">Update product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-update-product-body">
                        <div className='container pt-3'>
                            <div className="row">
                                <div className="col-12">
                                    <h2>UPDATE YOUR PRODUCT DATA</h2>
                                    <p>All fields marked with <span> * </span>are required</p>
                                </div>

                                <div className="col-12 text-center">
                                    <div className="w-50" style={{ margin: "0 auto" }}>
                                        <i className="bi bi-pencil icon-update-product" style={{ marginRight: "10px" }}></i>
                                        <i className="bi bi-trash icon-update-product"></i>
                                    </div>

                                </div>
                            </div>

                            <form className="form-update-product">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Product name<span>* </span></label>
                                    <input type="text" className="form-control input-update-product" aria-label="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputBrand1" className="form-label">Brand<span>* </span></label>
                                    <input type="email" className="form-control input-update-product" id="inputBrand" aria-describedby="emailHelp" />
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputUnit1" className="form-label ">Unit<span>* </span></label>
                                        <input type="text" className="form-control input-update-product" id="inputUnit" />
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputPrice1" className="form-label">Price<span>* </span></label>
                                        <input type="text" className="form-control input-update-product input-update" id="inputPrice" />
                                    </div>
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputProducer1" className="form-label">Producer/Manufacturer<span>* </span></label>
                                        <input type="text" className="form-control input-update-product" id="inputProducer" />
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputOrigin1" className="form-label">Origin<span>* </span></label>
                                        <input type="text" className="form-control input-update-product input-update" id="inputOrigin" />
                                    </div>
                                    <div className="mb-3" style={{ paddingRight: "0" }}>
                                        <label htmlFor="message-text" className="col-form-label">Description<span>* </span></label>
                                        <textarea className="form-control input-update-product" id="message-text"></textarea>
                                    </div>
                                    <div className="mb-3 d-flex flex-column">
                                        <label htmlFor="image" className="col-form-label">Image<span>* </span></label>
                                        <div className="icon-update-modal text-center">
                                            <i className="bi bi-camera"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: "30px" }}>
                                    <button className="btn btn-outline-success btn-modal-update" type="submit">Update </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUpdateProduct;