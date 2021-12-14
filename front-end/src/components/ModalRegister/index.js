import './ModalRegister.css'
const Modalregister = () => {
    return (
        <div className="modal fade" id="modalRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="exampleInputEmail1" className="form-label">Fullname<span>* </span></label>
                                    <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address<span>* </span></label>
                                    <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input type="password" className="form-control input-register" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Store name<span>* </span></label>
                                    <input type="password" className="form-control input-register" id="exampleInputPassword1" />
                                </div>
                                {/* <div className="row mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Store address<span>* </span></label>
                                    <div className="col-4">
                                        <label for="exampleInputEmail1" className="form-label form-alternative">street</label>
                                        <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-4">
                                        <label for="exampleInputEmail1" className="form-label form-alternative">store number</label>
                                        <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-4">
                                        <label for="exampleInputEmail1" className="form-label form-alternative">postal code</label>
                                        <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label for="exampleInputEmail1" className="form-label form-alternative">City</label>
                                        <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-6">
                                        <label for="exampleInputEmail1" className="form-label form-alternative">Country</label>
                                        <input type="email" className="form-control input-register" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Store web</label>
                                    <input type="password" className="form-control input-register" id="exampleInputPassword1" />
                                </div> */}
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