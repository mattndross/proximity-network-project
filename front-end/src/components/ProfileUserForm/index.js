import './ProfileUserForm.css'
import { Link } from 'react-router-dom'
const ProfileUserForm = () => {
    return (
        <div className="container px-4 py-5 p-lg-0">
            <div className="d-flex title-content-profile">
                <Link to="/profile-user"><h2>PROFILE</h2></Link>
                <span>|</span>
                <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>
            </div>
            <div className='from-profile'>
                <form className="formulario-usuario">
                    <div className="row mb-3">
                        <label htmlFor="exampleInputName1" className="form-label col-lg-4 col-form-label">Full name<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="text" className="form-control col-lg-6" id="exampleInputName" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label col-lg-4 col-form-label">Email address<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="email" className="form-control col-lg-6" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label col-lg-4 col-form-label">Password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" className="form-control col-lg-6" id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputStoreName" className="form-label col-lg-4 col-form-label">Store name<span>* </span></label>
                        <div className='col-lg-8'>
                            <input type="text" className="form-control col-lg-6" id="exampleInputStoreName1" />
                        </div>

                    </div>
                    <div className=" row mb-3">
                        <label htmlFor="exampleInputPDescription" className="form-label col-lg-4 col-form-label">Description<span>* </span></label>
                        <div className="form-floating col-lg-8">
                            <textarea className="form-control text-from-description col-lg-6" id="floatingTextarea2" style={{ height: "120px" }}></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputAddress2" className="form-label col-lg-4 col-form-label mb-2 pt-lg-0">Store address<span>* </span></label>
                        <div className="col-lg-8">
                            <div className='row'>
                                <div className="col-6 mb-3" style={{ paddingRight: "6px" }}>
                                    <input type="text" className="form-control title-placeholder" id="exampleInputStreet1" aria-describedby="emailHelp" placeholder="street" />
                                </div>
                                <div className="col-6 mb-3" style={{ paddingLeft: "0px" }}>
                                    <input type="text" className="form-control title-placeholder " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="postal code" />
                                </div>
                                <div className="col-6 " style={{ paddingRight: "6px" }}>
                                    <input type="text" className="form-control title-placeholder" id="inputCity" aria-describedby="emailHelp" placeholder="City" />
                                </div>
                                <div className="col-6" style={{ paddingLeft: "0px" }}>
                                    <input type="text" className="form-control title-placeholder" id="exampleInputCountry1" aria-describedby="emailHelp" placeholder="Country" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputStoreWeb1" className="form-label col-lg-4 col-form-label">Store web</label>
                        <div className='col-lg-8'>
                            <input type="text" className="form-control col-lg-6" id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleNumber1" className="form-label col-lg-4 col-form-label">Phone Number</label>
                        <div className='col-lg-8'>
                            <input type="text" className="form-control col-lg-6" id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-formulario">Save</button>
                    </div>

                </form>
            </div>


        </div >
    )
}

export default ProfileUserForm;
