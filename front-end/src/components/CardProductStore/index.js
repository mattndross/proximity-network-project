import './CardProductStore.css'
import product from '../../assets/img/fake-img/product.jpg'
const CardProductStore = ({ id }) => {
    return (

        <div className="col-6 col-lg-3 pb-4" data-bs-toggle="modal" data-bs-target={`#${id}`}>
            <div class="card-content">
                <div className="container-img">
                    <img src={product} className="img-fluid img-product" alt="product store" />
                </div>
                <div className="container-text">
                    <h2>Yogur Orgánico Arándalos</h2>
                </div>
            </div>
        </div>

    )
}
export default CardProductStore;