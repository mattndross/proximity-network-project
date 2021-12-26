import './CardStoreProfile.css'

import iconMapa from '../../assets/img/card-store-profile/icono-map.svg'
import iconMail from '../../assets/img/card-store-profile/icono-mail.svg'
import ButtonBack from '../BaseComponents/ButtonBack'

const CardStoreProfile = ({ store }) => {
    let storeInfo = store[0]

    return (
        <section id="cardStoreProfile" className="p-4">

            <div className="container">
                <div className="backButton px-5 mb-5" >
                    <ButtonBack path="/stores-list" text="Back to list" />
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <div className="card-img-store">
                            <img src={storeInfo['image']} className="img-fluid" alt="logo tieda" />
                        </div>

                    </div>
                    <div className="col-lg-6 card-text-store">
                        <h2>{storeInfo.name}</h2>
                        <p>{storeInfo["store_description"]} </p>
                        <h3>Opening hours</h3>
                        <p className="text-horario">Monday to Friday: 10h to 13:30h / 17h to 20h.Saturday: 10h to 14h</p>
                        <h3>Where we are :</h3>
                        <div className="row  card-icon-store">
                            <div className="col-sm-6">
                                <a href={storeInfo.web_page} className=" d-flex flex-column align-items-center" target="_blank"><img src={iconMail} alt="" />{storeInfo.web_page}</a>
                            </div>
                            <div className="col-sm-6">
                                <a href={storeInfo.maps_url} className=" d-flex flex-column align-items-center" target="_blank"><img src={iconMapa} alt="" />{storeInfo.address} <span className="d-block text-center" style={{ lineHeight: "15px" }}>{storeInfo.postcode} - {storeInfo.city}</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardStoreProfile;