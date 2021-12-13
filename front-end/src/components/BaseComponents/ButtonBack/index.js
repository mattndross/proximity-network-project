import './ButtonBack.css'
import { Link } from 'react-router-dom'
const ButtonBack = (props) => {
    return (

        <Link className='animated-arrow' to={props.path}>
            <span className='the-arrow -left'>
                <span className='shaft'></span>
            </span>
            <span className='main'>
                <span className='the-arrow -right'>
                    <span className='shaft'></span>
                </span>
                <span className='text'>
                    {props.text ? props.text : "Back"}
                </span>
            </span>
        </Link>



    )
}
export default ButtonBack;