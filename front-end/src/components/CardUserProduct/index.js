import './CardUserProduct.css';
import imgFake from '../../assets/img/fake-img/product.jpg';



const CardUserProduct = ({ product }) => {
    const brandName = `${product["product_type"].toUpperCase()} - ${product.brand.toUpperCase()}`;
    return (
        <div className="col-12 pb-4">

            <div class="row card-User-content">
                <div className="col-4 container-user-img">
                    <img src={imgFake} className="img-fluid img-user-product" alt="product store" />
                </div>
                <div className="col-8 row ">
                    <div className="col-12 col-lg-8 container-user-product-text">
                        <p>{product.price}  €</p>
                        <h4>{brandName}</h4>
                    </div>

                    <div className="col-12 col-lg-4 user-product-content-icon" >
                        <button className="user-product-btn" data-bs-toggle="modal" data-bs-target={`#productDelete-${product.id}`}>
                            <i className="bi bi-trash user-product-icon"></i>
                        </button>

                        <button className="user-product-btn" data-bs-toggle="modal" data-bs-target={`#product-${product.id}`}>
                            <i class="bi bi-pencil user-product-icon"></i>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )

}
export default CardUserProduct