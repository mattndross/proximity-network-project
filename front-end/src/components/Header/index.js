import React from "react";
import logo from "../Header/img/logo.png"
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../Header/Header.css"

const Header = () => {
    // <div className= "l-container"> 
    return (
        <nav className="main-header px-5">
            <Link to="/">
                <img src={logo} className="img-fluid" width="150px" alt="..." className="logo" />
            </Link>

            <ul className="main-menu">
                <li className="main-menu_item">
                    <a className="main-menu_link" data-bs-toggle="modal" data-bs-target="#modalRegister" style={{ cursor: "pointer" }}>Become a Member</a></li>
                <li className="main-menu_item" data-bs-toggle="modal" data-bs-target="#loginModal" style={{ cursor: "pointer" }}>
                    <a className="main-menu_link" >Login <i className="bi bi-person-circle icon-navbar"></i></a></li>
                <label htmlFor="check" className="checkbtn">
                    <FaBars></FaBars>
                </label>
            </ul>
        </nav >
    )
}
export default Header;