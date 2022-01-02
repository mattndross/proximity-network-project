import "./CardStore.css"
import { Link } from 'react-router-dom'
import icon from "../../assets/img/stores-list-banner/icon-direction.png"
const CardStore = ({ cardInfo }) => {



    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    function slugName(name) {
        return name.trim().split(" ").join("-").toLowerCase();
    }
    return (

        <div id={`store-${cardInfo.store_id}`} className="row align-items-center mb-5">
            <div className="col-6">
                <div className="img-container">
                    <img src={cardInfo.image} className="img-fluid card-img" alt="picture store" />
                </div>
            </div>
            <div className="col-6 card-store-text">
                <h1>{capitalizeFirstLetter(cardInfo.name)}</h1>
                <p style={{ fontStyle: "italic" }}>{capitalizeFirstLetter(cardInfo.store_category)}</p>
                <div className="card-direction">
                    <a href={cardInfo.maps_url} target="_blank"><img src={icon} className="img-fluid icon-direction" alt="icon" /></a>
                    <p>{cardInfo.address}<span className="d-block">{cardInfo.postcode} - {cardInfo.city}</span></p>
                </div>

                <Link className="btn btn-primary btn-card-store" to={`/store-profile/${slugName(cardInfo.name)}`}>view profile</Link>
            </div>
        </div>

    )
}

export default CardStore;