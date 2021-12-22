import './ModalRegister.css'
import { Link } from 'react-router-dom'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Modalregister = () => {
let navigate  = useNavigate();

const [storeManager, setStoreManager] = useState("")
const [managerEmail, setManagerEmail] = useState("")
const [password, setPassword] = useState("")

//  al registrarse se redirigira a esta pagina--> /profile-user
const fetchRegister =  async () => {
        const url = "http://localhost:4000/register"; 
        const body = { storeManager: storeManager, managerEmail: managerEmail, password: password};  
        const config = {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
        try{
        const response = await fetch(url, config)
        console.log("response", response);
        const data = await response.json()
            console.log("data", data);
            localStorage.setItem("token", data.token)
            navigate("/profile-user", {replace: false})
           
    } catch(e) {
        console.log("error", e);
    }
}

const registerDone = (e) => {
    e.preventDefault();
    fetchRegister()

}
    return (
        <div className="modal fade" id="modalRegister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-register-body">
                        <div className='container'>
                            <h2>Register with us</h2>
                            <p>Enter your data</p>
                            <div className="d-flex align-items-center content-manager mb-3">
                                <i className="bi bi-person-bounding-box"></i>
                                <h5>Store manager:</h5>
                            </div>
                            <form className="form-register" onSubmit={registerDone} >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Fullname<span>* </span></label>
                                    <input 
                                        type="text" 
                                        className="form-control input-register" 
                                        aria-label="FullName" 
                                        value={storeManager} 
                                        onChange={(e)=>{setStoreManager(e.target.value)}} 
                                        required
                                    />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address<span>* </span></label>
                                    <input 
                                        type="email" 
                                        className="form-control input-register" 
                                        id="inputEmail" aria-describedby="emailHelp" 
                                        value={managerEmail} 
                                        onChange={(e)=>{setManagerEmail(e.target.value)}} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input 
                                        type="password" 
                                        className="form-control input-register" 
                                        id="exampleInputPassword1" 
                                        value={password} 
                                        onChange={(e)=>{setPassword(e.target.value)}} 
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-register" >Create an account</button>
                            </form>
                            <div className='text-center mt-2 mb-5'>
                                <a  className="enlace-login" data-bs-toggle="modal" data-bs-target="#loginModal">Login </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Modalregister;