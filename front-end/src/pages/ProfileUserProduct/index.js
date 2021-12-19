import "./ProfileUserProduct.css"
import NavBarProfileProduct from "../../components/NavBarProfileProduct";
import ProfileUserYourProducts from "../../components/ProfileUserYourProducts"

const ProfileUserProduct = () => {
    return (
        <>
            <div className="margin-profile-product">
                <NavBarProfileProduct></NavBarProfileProduct>
            </div>
            <section id="profileProductHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your products</h1>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-8">
                            <p className="product-parrafo">Here you can view and upload products.</p>
                        </div>
                        <div className=" col-3 d-flex profile-product-text">
                            <h2>8</h2>
                            <p className="product-text-p">product</p>
                        </div>
                    </div>
                </div>
                <ProfileUserYourProducts></ProfileUserYourProducts>
            </section>
        </>
    )
}

export default ProfileUserProduct;