import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import './ModalRegister.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Modal } from 'bootstrap';

//usando yup 
const validationSchema = Yup.object().shape({
    storeManager: Yup.string().required('this field is required'),
    managerEmail: Yup.string().email().required('this field is required'),
    password: Yup.string().required('this field is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null])
});

const Modalregister = ({ setIsLogged }) => {
    let myModalRef = useRef();
    let navigate = useNavigate();
    const [storeManager, setStoreManager] = useState("")
    const [managerEmail, setManagerEmail] = useState("")
    const [password, setPassword] = useState("")

    //  al registrarse se redirigira a esta pagina--> /profile-user
    const fetchRegister = async () => {
        const dismissModal = () => {
            console.log('modal tiene que cerrarse')

            modal.hide(myModal);
            myModal.addEventListener('hidden.bs.modal', () => {
                document.body.style.overflow = 'unset';
                document.body.style.paddingRight = '0';
                if (document.querySelector(".modal-backdrop")) document.querySelector('.modal-backdrop').remove()
            })
        }

        const url = "https://proximity-network-api.herokuapp.com/register";
        const body = { storeManager: storeManager, managerEmail: managerEmail, password: password };
        const config = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        let myModal = myModalRef.current;
        let modal = Modal.getInstance(myModal);

        try {
            const response = await fetch(url, config)
            console.log("response", response);
            if (!response.ok) {
                const messege = await response.json();
                console.log(messege);
                console.log("response.status", response.status);
            }
            else {
                const data = await response.json()
                console.log("data", data);
                localStorage.setItem("token", data.token);
                setIsLogged(true);
                dismissModal();
                navigate("/profile-user", { "replace": true })

            }
        } catch (e) {
            console.log("error", e);
        }
        console.log("localStorage token", localStorage.getItem("token"));

    };


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));

        fetchRegister();
    };
    return (
        <div className="modal fade" id="modalRegister" ref={myModalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <form className="form-register" onSubmit={handleSubmit(onSubmit)} >
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputName1" className="form-label">Fullname<span>* </span></label>
                                    <input
                                        type="text"
                                        ref={register}
                                        className={`form-control input-register  ${errors.storeManager ? 'is-invalid' : ''}`}
                                        aria-label="storeManager"
                                        {...register('storeManager')}
                                        value={storeManager}
                                        onChange={(e) => { setStoreManager(e.target.value) }}
                                    />
                                </div>
                                <p>{errors.storeManager?.message}</p>
                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address<span>* </span></label>
                                    <input
                                        type="email"
                                        ref={register}
                                        className={`form-control input-register  ${errors.managerEmail ? 'is-invalid' : ''}`}
                                        id="inputEmail" aria-label="managerEmail"
                                        {...register('managerEmail')}
                                        value={managerEmail}
                                        onChange={(e) => { setManagerEmail(e.target.value) }}
                                    />
                                </div>
                                <p>{errors.managerEmail?.message}</p>

                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password<span>* </span></label>
                                    <input
                                        type="password"
                                        ref={register}
                                        className={`form-control input-register  ${errors.password ? 'is-invalid' : ''}`}
                                        id="exampleInputPassword1" aria-label="password"
                                        {...register('password')}
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>
                                <p>{errors.password?.message}</p>

                                <div className="mb-3 modal-body-content">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password<span>* </span></label>
                                    <input
                                        type="password"
                                        ref={register}
                                        className={`form-control input-register  ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                        id="exampleInputPassword1" aria-label="confirmPassword"
                                        {...register('confirmPassword')}

                                    />
                                </div>
                                <p>{errors.confirmPassword && "passwords should match"}</p>

                                <button type="submit" className="btn btn-primary btn-register" >Create an account</button>
                            </form>
                            <div className='modal-login-link d-flex'>
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