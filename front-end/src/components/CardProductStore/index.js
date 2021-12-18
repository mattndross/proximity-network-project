import './CardProductStore.css'
import productimg from '../../assets/img/fake-img/product.jpg'
const CardProductStore = ({ product }) => {
    return (

        <div className="col-6 col-lg-3 pb-4" data-bs-toggle="modal" data-bs-target={`#product-${product.id}`}>
            <div class="card-content">
                <div className="container-img">
                    <img src={productimg} className="img-fluid img-product" alt="product store" />
                </div>
                <div className="container-text">
                    <h2>{product["product_type"]} - {product.brand}</h2>
                </div>
            </div>
        </div>

    )
}
export default CardProductStore;