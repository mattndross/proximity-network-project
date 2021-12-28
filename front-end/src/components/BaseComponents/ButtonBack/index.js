import './ButtonBack.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const ButtonBack = (props) => {
    const navigate = useNavigate();
    return (

        <a className='animated-arrow' onClick={() => navigate(-1)}>
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
        </a>



    )
}
export default ButtonBack;