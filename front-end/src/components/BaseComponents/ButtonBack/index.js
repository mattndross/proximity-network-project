import './ButtonBack.css'
import { Link } from 'react-router-dom'
const ButtonBack = (props) => {
    return (

        <Link class='animated-arrow' to={props.path}>
            <span class='the-arrow -left'>
                <span class='shaft'></span>
            </span>
            <span class='main'>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                <span class='text'>
                    {props.text ? props.text : "Back"}
                </span>
            </span>
        </Link>



    )
}
export default ButtonBack;