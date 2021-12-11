import React from "react";
import logo from "../Header/img/logo.jpg"
import icon from "../Header/img/icon.png"
import {FaBars} from "react-icons/fa"
import "../Header/Header.css"

const Header = ()=>{
    // <div className= "l-container"> 
    return(
        //*----Header---*//
        <nav className= "main-header">
            <a href="#"><img src={logo} alt="..." className="logo"></img></a>
            <ul className="main-menu">
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Become a Member</a></li>
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Login <img src={icon} alt="..." className="icon"></img></a></li>         
                <label for="check" className="checkbtn">
                 <FaBars></FaBars>
                </label>
            </ul>
        </nav>
    )
}
export default Header;