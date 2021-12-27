import './ProfileUserAccount.css'
import NavBarProfileProduct from "../../components/NavBarProfileProduct";
import ProfileUserFormAcount from '../../components/ProfileUserFormAccount';

const ProfileUserAccount = () => {
    return (
        <>
            <div className="margin-account-user">
                <NavBarProfileProduct></NavBarProfileProduct>
            </div>
            <section id="profileAccountHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your Account</h1>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-8">
                            <p className="account-parrafo">Here you can update your account.</p>
                        </div>
                        <div className=" col-3 d-flex profile-account-text">
                            <h2>8</h2>
                            <p className="account-text-p">product</p>
                        </div>
                    </div>
                </div>
                <ProfileUserFormAcount></ProfileUserFormAcount>
            </section>
        </>

    )
}

export default ProfileUserAccount;