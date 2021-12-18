import "./CardStore.css"
import { useNavigate } from 'react-router-dom'
import icon from "../../assets/img/stores-list-banner/icon-direction.png"
const CardStore = ({ cardInfo, setStoreProfileId }) => {
    let navigate = useNavigate();

    const handleOnClick = (objCard) => {

        setStoreProfileId(objCard)
        navigate('/store-profile')

    }
    return (

        <div id={`store-${cardInfo.store_id}`} className="row align-items-center mb-5">
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
                <button className="btn btn-primary btn-card-store" onClick={() => handleOnClick(cardInfo)}>view profile</button>

            </div>
        </div>

    )
}

export default CardStore;