import './StoreProfileBanner.css'
import bannerProfile from '../../assets/img/store-profile-banner/banner-profile-tienda.jpg'
import iconBanner from '../../assets/img/store-profile-banner/store-profile-img.jpg'
import iconProfileBanner from '../../assets/img/store-profile-banner/icon-bg.svg'

const StoreProfileBanner = () => {
    return (
        <>
            <section id="storeProfileBanner" style={{ backgroundImage: `url(${bannerProfile})` }}>
                <div className="container">
                    <p>Organic products grown with love!</p>
                    <h2>HAVE A LOOK AT OUR STORES ORGANIC</h2>
                    <div className="content-text">
                        <p>REACH FOR A HEALTIER YOU</p>
                        <img src={iconProfileBanner} alt="" />
                        <p>WITH ORGANIC FOODS. </p>
                    </div>
                </div>
            </section>
            <div className="icon-store" style={{ backgroundImage: `url(${iconBanner})` }}></div>
        </>
    )
}

export default StoreProfileBanner;