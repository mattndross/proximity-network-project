import { useState } from 'react';
import './LoginModal.css'

const LoginModal = () => {

    const [loginInputValue, setLoginInputValue] = useState("")
    const handleLoginInputValue = (event) => {
        setLoginInputValue(event.target.value)
        // console.log(loginInputValue)
    }

    const [loginPassword, setLoginPassword] = useState("")
    const handleLoginPassword = (event) => {
        setLoginPassword(event.target.value)
        // console.log(loginPassword)
    }

    const [submitLoginData, setSubmitLoginData] = useState(null)
    const handleSubmitLoginData = (event) => {
        event.preventDefault()
        setSubmitLoginData(event.target.value)
        console.log(submitLoginData)
    }
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Login</h6>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-4">
                        <div className='container modal-body-login'>
                            <h2>¡Welcome back!</h2>
                            <p>Enter your data below</p>
                            <form>
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span>* </span></label>
                                    <input type="email" className="form-control input-login" id="exampleInputEmail1" aria-describedby="emailHelp" value={loginInputValue} onChange={handleLoginInputValue} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input type="password" className="form-control input-login" id="exampleInputPassword1" value={loginPassword} onChange={handleLoginPassword}/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-login" onSubmit={submitLoginData} onChange={handleSubmitLoginData}>Sign in</button>
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