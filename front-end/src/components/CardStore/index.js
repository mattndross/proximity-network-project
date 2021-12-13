import "./CardStore.css"
import imgPrueba from "../../assets/img/stores-list-banner/img-prueba-card.jpg"
import icon from "../../assets/img/stores-list-banner/icon-direction.png"
import { Link } from "react-router-dom"

const CardStore = ({ cardInfo }) => {
    return (

        <div className="row align-items-center mb-5">
            <div className="col-6">
                <div className="img-container">
                    <img src={cardInfo.image} className="img-fluid card-img" alt="picture store" />
                </div>
            </div>
            <div className="col-6 card-store-text">
                <h1>{cardInfo.name}</h1>
                <p>{cardInfo.store_category}</p>
                <div className="card-direction">
                    <a href="https://www.google.es/maps/?hl=es" target="_blank"><img src={icon} className="img-fluid icon-direction" alt="icon" /></a>
                    <p>{cardInfo.address}<span className="d-block">{cardInfo.postcode} - {cardInfo.city}</span></p>
                </div>
                <Link className="btn btn-primary btn-card-store" to="/store-profile" role="button">view profile</Link>
            </div>
        </div>

    )
}

export default CardStore;