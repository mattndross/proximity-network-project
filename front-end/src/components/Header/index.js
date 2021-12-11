import React from "react";
import logo from "../Header/img/logo.png"
import { FaBars } from "react-icons/fa"
import "../Header/Header.css"

const Header = () => {
    // <div className= "l-container"> 
    return (
        <nav className="main-header px-5">
            <a href="/"><img src={logo} className="img-fluid" width="150px" alt="..." className="logo"></img></a>
            <ul className="main-menu">
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Become a Member</a></li>
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Login <i class="bi bi-person-circle icon-navbar"></i></a></li>
                <label for="check" className="checkbtn">
                    <FaBars></FaBars>
                </label>
            </ul>
        </nav >
    )
}
export default Header;