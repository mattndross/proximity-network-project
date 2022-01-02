
import { useNavigate } from 'react-router';
import './LoginModal.css'
import React, { useState, useRef } from "react";
import { Modal } from 'bootstrap';

const LoginModal = ({ isLogged, setIsLogged }) => {


    let myModalRef = useRef();

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidUser, setInvalidUser] = useState(false);


    const fetchSignIn = async () => {

        const dismissModal = () => {

            modal.hide(myModal)
            myModal.addEventListener('hidden.bs.modal', function (event) {
                document.body.style.overflow = "unset"
                document.body.style.paddingRight = "0";
                if (document.querySelector('.modal-backdrop')) document.querySelector('.modal-backdrop').remove()
            })
        }


        const user = { email, password };

        const url = "https://proximity-network-api.herokuapp.com/login";
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        };

        let myModal = myModalRef.current;
        let modal = Modal.getInstance(myModal)
        try {
            localStorage.removeItem("token")
            const response = await fetch(url, config);
            if (!response.ok) {
                if (response.status === 401) {

                    modal.show(myModal)
                    setInvalidUser(true)


                }

            } else {
                const data = await response.json();

                localStorage.setItem("token", data.token);

                dismissModal();
                setInvalidUser(false);
                setIsLogged(data.token)
                navigate("/profile-user", { "replace": true });
            }

        } catch (e) {
            console.log("oh no," + e);
        }



    };

    const handleSubmitLoginData = (event) => {
        event.preventDefault()
        console.log(myModalRef.current)

        fetchSignIn();

    }
    return (
        <div className="modal fade" id="loginModal" ref={myModalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Login</h6>
                        <button type="button" className="btn-close" active="true" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-4">
                        <div className='container modal-body-login'>
                            <h2>¡Welcome back!</h2>
                            <p>Enter your data below</p>
                            {invalidUser && <h6 id='modal-alert-invalid-input'>invalid email or password</h6>}
                            <form onSubmit={handleSubmitLoginData} >
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span>* </span></label>
                                    <input type="email" className="form-control input-login" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input type="password" className="form-control input-login" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-login" >Login</button>
                            </form>
                            <div className="modal-login-link d-flex">
                                {/*  <a href="">Lost your password? </a>
                                <span>|</span> */}
                                <a className="modal-link" data-bs-toggle="modal" data-bs-target="#modalRegister">Register here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default LoginModal;