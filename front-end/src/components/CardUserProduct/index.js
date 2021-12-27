import './CardUserProduct.css'
const CardUserProduct = ({ product }) => {
    const brandName = `${product["product_type"].toUpperCase()} - ${product.brand.toUpperCase()}`;
    return (
        <div className="col-12 pb-4" data-bs-toggle="modal" data-bs-target={`#product-${product.id}`}>

            <div class="row card-User-content">
                <div className="col-4">
                    <img src={product['product_image']} className="img-fluid w-100 h-100 img-user-product" alt="product store" />
                </div>
                <div className="col-8 row">
                    <div className="col-12">
                        <h4>{brandName}</h4>
                    </div>

                    <div className="col-12">
                        <i className="bi bi-trash icon-update-product"></i>
                        <i class="bi bi-pencil icon-update-product"></i>
                    </div>



                </div>

            </div>
        </div>
    )

}
export default CardUserProduct