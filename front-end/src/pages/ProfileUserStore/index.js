import React, { useEffect, useState } from 'react'
import './ProfileUserStore.css'
import { Link } from 'react-router-dom'
import ProfileUserForm from '../../components/ProfileUserForm'
import Loading from "../../components/BaseComponents/Loading"
// Importando clase con los metodos a los endpoints.
import ProfileUserService from '../../services/profileUser.service'


const ProfileUserStore = () => {


    const [profile, setProfile] = useState("");
    const [error, setError] = useState("")
    const [action, setAction] = useState("LISTAR")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {

            ProfileUserService.getLoggedProfile().then(
                (response) => {
                    setProfile(response.data);

                }
            );
        } catch (error) {
            setError(error);
        }

    }, [action]);

    return (
        <>

            <section id="profilUserHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your profile</h1>
                    <div className="d-flex justify-content-between profile-user-text">
                        <p>Here you can view and edit your profile data.</p>

                    </div>
                </div>
                <div className="d-flex title-content-profile">
                    <Link to="/profile-user"><h2>PROFILE</h2></Link>
                    <span>|</span>
                    <Link to="/profile-account"><h2>ACCOUNT</h2></Link>
                    <span>|</span>
                    <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>
                </div>


                {profile && <ProfileUserForm setAction={setAction} profile={profile} />}


            </section>
        </>

    )
}

export default ProfileUserStore;