import './StoreProductBanner.css'
import icon from '../../assets/img/store-product-banner/icon.png'
import bg from '../../assets/img/store-product-banner/banner-fondo.jpg'
import img from '../../assets/img/store-product-banner/banner-img.png'

const StoreProductBanner = () => {
    return (
        <section id="bannerSecundario" style={{ backgroundImage: `url(${bg})` }}>
            <div class="container">
                <div className='row px-3 flex-column-reverse flex-lg-row align-items-center'>
                    <div className='col-lg-7'>
                        <img src={img} className="img-fluid" alt="imagen banner" />
                    </div>
                    <div className='col-lg-5 banner-text'>
                        <p>BRILLIANT EATING <span className="">by</span></p>
                        <div className="w-100 text-center">
                            <img src={icon} className="w-50" alt="icono banner" />
                        </div>

                        <p className="parrafo-banner">Organic food is produced with traditional techniques, free of additives, hormones, toxins, transgenics and chemicals, so it does not harm the soil. </p>
                    </div>

                </div>
            </div>

        </section >
    )
}
export default StoreProductBanner;