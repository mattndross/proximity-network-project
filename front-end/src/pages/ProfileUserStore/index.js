import React from 'react'
import './ProfileUserStore.css'
import { Link } from 'react-router-dom'
import NavBarProfileUser from '../../components/NavBarProfileUser'
import ProfileUserForm from '../../components/ProfileUserForm'

const ProfileUserStore = () => {
    return (
        <>
            <div className="margin-profile-user">
                <NavBarProfileUser></NavBarProfileUser>
            </div>
            <section id="profilUserHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your profile</h1>
                    <div className="d-flex justify-content-between profile-user-text">
                        <p>Here you can view and edit your profile data.</p>
                        <button class="d-flex btn btn-outline-success" id="btn-logout" type="submit">
                            <i class="bi bi-shop"></i>Logout</button>
                    </div>
                </div>
                <ProfileUserForm></ProfileUserForm>


            </section>
        </>

    )
}

export default ProfileUserStore;