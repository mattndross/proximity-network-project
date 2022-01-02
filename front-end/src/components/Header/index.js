import React, { useState, useContext, useEffect } from "react";

import logo from "../Header/img/logo.png"
import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal'
import Modalregister from '../ModalRegister';
import { ProfileContext } from "../../context/ProfileContext";
import "../Header/Header.css"

const Header = () => {

    const [open, setOpen] = useState(false)

    const profileContext = useContext(ProfileContext)

    const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))



    // logout
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('storeName')
        setIsLogged(false);
        window.location.href = "/"
    }

    useEffect(() => {
        console.log("me volvi a renderizar....")

    }, [isLogged])




    const handleChange = () => {
        setOpen(!open)
    }

    // Lo que mostrara cuando este logueado
    const whenLooged =
        (<>
            <li className="nav-item">
                <Link className=" nav-profile-user-link active" aria-current="page" to="/profile-user"><i className="bi bi-person-circle nav-profile-user-icon"></i>{profileContext[0]}</Link>
            </li>
            <li><button class="d-flex btn btn-outline-success" id="btn-logout" type="submit" onClick={logout}>
                <i class="bi bi-shop"></i>Logout</button></li>
        </>)

    // Se mostrara cuando NO este logueado.
    const notLooged = (<> <li className="main-menu_item">
        <a className="main-menu_link" data-bs-toggle="modal" data-bs-target="#modalRegister" style={{ cursor: "pointer" }}>Become a Member</a></li>

        <li className="main-menu_item" data-bs-toggle="modal" data-bs-target="#loginModal" style={{ cursor: "pointer" }}>
            <a className="main-menu_link" >Login <i className="bi bi-person-circle icon-navbar"></i></a></li></>)

    return (
        <>
            <nav className={`main-header px-5 ${open ? 'open' : ''}`}>
                <Link to="/">
                    <img src={logo} alt="..." className="logo"></img>
                </Link>
                <input type="checkbox" id="check" onChange={handleChange}></input>
                <label for="check" className="checkbtn">
                    <i class="bi bi-list"></i>
                </label>



                <ul className="main-menu">

                    {isLogged ? whenLooged : notLooged}

                </ul>
            </nav >
            <Modalregister islogged={isLogged} setIsLogged={setIsLogged}></Modalregister>
            <LoginModal islogged={isLogged} setIsLogged={setIsLogged}></LoginModal>
        </>
    )
}
export default Header;
