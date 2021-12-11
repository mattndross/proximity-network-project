import './CardStoreProfile.css'
import logoTienda from '../../assets/img/card-store-profile/bioproducts.png'
import iconMapa from '../../assets/img/card-store-profile/icono-map.svg'
import iconMail from '../../assets/img/card-store-profile/icono-mail.svg'
import ButtonBack from '../BaseComponents/ButtonBack'
const CardStoreProfile = () => {
    return (
        <section id="cardStoreProfile" className="p-4">

            <div className="container">
                <div className="backButton px-5 mb-5" >
                    <ButtonBack path="/stores-list" text="Back to list" />
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <div className="card-img-store">
                            <img src={logoTienda} className="img-fluid" alt="logo tieda" />
                        </div>

                    </div>
                    <div className="col-lg-6 card-text-store">
                        <h2>Store Bioproduct</h2>
                        <p>We offer you a list of stores that only offer healthy and organic products. The goal is that you can enjoy the authentic taste of the products, at the same time, that you take care of your health. </p>
                        <h3>Opening hours</h3>
                        <p className="text-horario">Monday to Friday: 10h to 13:30h / 17h to 20h.Saturday: 10h to 14h</p>
                        <h3>Where we are :</h3>
                        <div className="row  card-icon-store">
                            <div className="col-sm-6">
                                <a href="www.bioproductsspain.com" className=" d-flex flex-column align-items-center" target="_blank"><img src={iconMail} alt="" />www.bioproducts.com.es</a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://www.google.es/maps/?hl=es" className=" d-flex flex-column align-items-center" target="_blank"><img src={iconMapa} alt="" />Carrer de sant Quinti, 89 <span className="d-block text-center" style={{ lineHeight: "15px" }}>08041 barcelona</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardStoreProfile;