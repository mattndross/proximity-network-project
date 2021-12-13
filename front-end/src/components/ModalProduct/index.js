import './ModalProduct.css'
import imagenModal from '../../assets/img/fake-img/product.jpg'
const ModalProduct = () => {
    return (
        <div className="modal fade" id="modalProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="modal-img-product">
                                        <img src={imagenModal} className="" alt="modal imagen" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-modal-product">
                                        <h2>Yogur Orgánico -Arándalos</h2>
                                        <p>Bote 1 kg | 1,90 €/kg</p>
                                        <p className="text-precio">1,90 € /ud</p>
                                        <h3>Origen:</h3>
                                        <p> <i className="bi bi-geo-alt icon-modal"></i>Cataluña-Gerona</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ModalProduct;