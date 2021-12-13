import React from 'react'
import "./CardListStores.css"
import CardStore from '../CardStore'
import iconTienda from '../../assets/img/stores-list-banner/icon-tienda.svg'
// importar el contexto
import { Context } from '../../context/SearchContext.js'

const dataFake = [
    {
        "store_id": 1,
        "name": "Ecoalimentaria",
        "store_description": "",
        "store_category": "Alimentación",
        "web_page": "https://www.ecoalimentaria.es/es/",
        "store_email": "eco@mail.com",
        "phone_number": "632347635",
        "location": "Carrer de sant Quinti 89",
        "postalCode": "08041 barcelona",

        "image": "https://scontent.fbcn7-2.fna.fbcdn.net/v/t1.18169-9/74265_436358423093621_2118048283_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=cwb__zaKqcUAX8lZTe-&_nc_ht=scontent.fbcn7-2.fna&oh=00_AT_-n_w7UC1lEkHu1dNpYwHyaEbMxHMK1VgK0Rx8BqH5Kw&oe=61DDB3BE"
    },
    {
        "store_id": 2,
        "name": "Lo de marta",
        "store_description": "",
        "store_category": "Alimentación",
        "web_page": "https://www.lodemarta.com",
        "store_email": "marta@mail.com",
        "phone_number": "634675637",
        "location": "Carrer de sant Quinti 89",
        "postalCode": "08041 barcelona",

        "image": "http://www.pro-cert.org/wp-content/uploads/2018/02/LogoBioCanadaRGBpresse.jpg"
    }
]
const CardListStores = () => {

    // const searchValueGlobal = useContext(Context);
    // const [stores, setStores] = useState([]);

    // useEffect(() => {
    //     const getData = () => {
    //         fetch(`http://localhost:4000/search/${searchValueGlobal}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setStores(data);
    //                 console.log("fetched", data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     };
    //     getData();
    // }, []);
    return (
        <section id="cardListStore">
            <div className="section-header d-flex justify-content-center align-items-baseline text-center">
                <img src={iconTienda} alt="" />
                <h1>Stores List</h1>
            </div>
            <div className="container">
                <div className="row card-list-content">
                    <div className="col-lg-8 col-xl-6">
                        {
                            dataFake.map((cardInfo) => <CardStore cardInfo={cardInfo} />)
                        }
                    </div>
                    <div className="col-lg-4 col-xl-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.775370888872!2d2.1821435156713362!3d41.422394601786664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd2a9d40d745%3A0x393b26cc3dfc5b5a!2sCarrer%20de%20Felip%20II%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1638973289824!5m2!1ses!2ses" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CardListStores;
