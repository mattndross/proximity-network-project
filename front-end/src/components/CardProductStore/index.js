import imgProduct from '../../assets/img/fake-img/product.jpg'
import './CardProductStore.css'
const CardProductStore = ({ product }) => {
    const getUrlImg = (img) => {

        if (img !== null && img.includes('https')) {
            return img;
        } else {
            return `https://proximity-network-api.herokuapp.com/images/${img}`
        }
    }
    const brandName = `${product["product_type"].toUpperCase()} - ${product.brand.toUpperCase()}`;
    return (
        <div className="col-6 col-lg-4 pb-4" data-bs-toggle="modal" data-bs-target={`#product-${product.id}`}>
            <div class="card-content">
                <div className="container-img">
                    <img src={getUrlImg(product['product_image'])} className="img-fluid img-product" alt="product store" />
                </div>
                <div className="container-text">
                    <h2>{brandName}</h2>
                </div>
            </div>
        </div>

    )
}
export default CardProductStore;