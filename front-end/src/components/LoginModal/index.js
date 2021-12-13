import './LoginModal.css'

const LoginModal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="exampleInputEmail1" className="form-label">Email address <span>* </span></label>
                                    <input type="email" className="form-control input-login" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 modal-body-content">
                                    <label for="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input type="password" className="form-control input-login" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-login">Sign in</button>
                            </form>
                            <div className="modal-login-link d-flex">
                                <a href="">Lost your password? </a>
                                <span>|</span>
                                <a href="">Regístrate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default LoginModal;