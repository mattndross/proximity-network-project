import './ModalRegister.css'
import { Link } from 'react-router-dom'

const Modalregister = () => {
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
                            <form className="form-register">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Fullname<span>* </span></label>
                                    <input type="text" className="form-control input-register" aria-label="FullName" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address<span>* </span></label>
                                    <input type="email" className="form-control input-register" id="inputEmail" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input type="password" className="form-control input-register" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-register">Create an account</button>
                            </form>
                            <div className='text-center mt-2 mb-5'>
                                <a className="enlace-login" data-bs-toggle="modal" data-bs-target="#loginModal">Login </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Modalregister;