import React, { useEffect, useState } from 'react'
import './ProfileUserStore.css'
import { Link } from 'react-router-dom'
import NavBarProfileUser from '../../components/NavBarProfileUser'
import ProfileUserForm from '../../components/ProfileUserForm'
// Importando clase con los metodos a los endpoints.
import ProfileUserService from '../../services/profileUser.service'


const ProfileUserStore = () => {

    const [profile, setProfile] = useState("");
    const [error, setError] = useState("")
    useEffect(() => {
        try {
            ProfileUserService.getLoggedProfile().then(
                (response) => {
                    setProfile(response.data);
                },
                (error) => {
                    const _content =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();

                    setProfile(_content);
                }
            );
        } catch (error) {
            setError(error);
        }

    }, []);

    return (
        <>
            <div className="margin-profile-user">
                <NavBarProfileUser />
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
                {profile && <ProfileUserForm profile={profile} />}


            </section>
        </>

    )
}

export default ProfileUserStore;