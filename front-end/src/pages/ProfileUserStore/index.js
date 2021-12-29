import React, { useEffect, useState } from 'react'
import './ProfileUserStore.css'

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

            <section id="profilUserHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your profile</h1>
                    <div className="d-flex justify-content-between profile-user-text">
                        <p>Here you can view and edit your profile data.</p>

                    </div>
                </div>
                {profile && <ProfileUserForm profile={profile} />}


            </section>
        </>

    )
}

export default ProfileUserStore;