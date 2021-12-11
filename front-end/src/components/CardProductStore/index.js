import './CardProductStore.css'
import product from '../../assets/img/fake-img/product.jpg'
const CardProductStore = () => {
    return (
        <div className="col-6 col-lg-4">
            <div class="card-content">
                <div className="container-img">
                    <img src={product} className="img-fluid img-product" alt="product store" />
                </div>
                <div className="container-text">
                    <h2>Yogur Orgánico -Arándalos</h2>
                </div>
            </div>
        </div>

    )
}
export default CardProductStore;