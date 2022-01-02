import './ProfileUserNavLink.css';
import { Link, NavLink } from 'react-router-dom'
const ProfileUserNavLink = () => {
    return (
        <div className='container p-4 p-lg-0'>
            <div className="d-flex title-content-profile">
                <NavLink className={({ isActive }) =>
                    isActive ? 'link-activo ' : 'link-inactivo'
                } to="/profile-user"><h2>PROFILE</h2></NavLink >
                <span>|</span>
                <NavLink className={({ isActive }) =>
                    isActive ? 'link-activo' : 'link-inactivo'
                } to="/profile-account"><h2>ACCOUNT</h2></NavLink >
                <span>|</span>
                <NavLink className={({ isActive }) =>
                    isActive ? 'link-activo' : 'link-inactivo'
                } to="/profile-product"><h2>YOUR PRODUCTS</h2></NavLink >
            </div>

        </div>

    )
}
export default ProfileUserNavLink