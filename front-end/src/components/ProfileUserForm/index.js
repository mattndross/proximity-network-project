import './ProfileUserForm.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Button from '../Button'
import ProfileUserService from '../../services/profileUser.service';
import toast, { Toaster } from 'react-hot-toast';
const ProfileUserForm = ({ profile, setAction, action }) => {
    const profileInfo = profile[0]






    const validationSchema = Yup.object().shape({
        storeManager: Yup.string().required('Fullname is required'),
        storeName: Yup.string().required('Store name is required'),
        storeDescription: Yup.string().required('Description is required'),
        storeStreet: Yup.string().required('Street is required').min(2, 'Seems a bit short EX: Carrer Felipe .....'),
        postcode: Yup.string().required('Postal code is required'),
        city: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),
        storeCategory: Yup.string().required('Store category is required'),
        storeWeb: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url! EX: www.myWeb.com'),
        phoneNumber: Yup.number().min(9).required('Phone number required.. EX: 60122..'),


    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });



    // Metodo onSubmit
    const onSubmit = data => {

        const toasId = toast.custom(<div>
            <button class="btn btn-primary button-loading-user" style={{ backgroundColor: "#408e0a", opacity: "1", fontWeight: "700" }} type="button" disabled>
                <span class="spinner-border spinner-border-sm" style={{ color: "white", fontSize: "26px" }} role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>

        );

        setTimeout(() => {
            try {
                ProfileUserService.updateProfile(data).then(
                    (response) => {
                        console.log(response);
                        toast.remove(toasId)

                        toast.success("Profile updated successfully!", {
                            style: {
                                backgroundColor: "#408e0a",
                                color: "white",
                                padding: "20px",
                                fontSize: "20px"
                            },
                        })


                        setAction(!action)

                    }
                );
            } catch (error) {
                toast.error("error")
            }

        }, 1000)



    };


    // FormProfi
    const formProfile = (<div className='from-profile'>


        <form className="formulario-usuario" onSubmit={handleSubmit(onSubmit)}  >
            <div className="row mb-3">
                <label htmlFor="exampleInputName1" className="form-label col-lg-4 col-form-label">Full name<span>* </span></label>
                <div className="col-lg-8">
                    <input type="text" defaultValue={profileInfo["store_manager"]} name="storeManager" className={`form-control  ${errors.storeManager ? '' : ''}`} id="exampleInputName" {...register('storeManager')}
                    />
                    <div className="invalid-feedback">{errors.storeManager?.message}</div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="exampleInputStoreCategory" className="form-label col-lg-4 col-form-label">Store category<span>* </span></label>
                <div className='col-lg-8'>
                    <input type="text" name="storeCategory" defaultValue={profileInfo["store_category"]} className={`form-control  ${errors.storeCategory ? 'is-invalid' : ''}`} {...register('storeCategory')} id="exampleInputStoreName1" />
                    <div className="invalid-feedback">{errors.storeCategory?.message}</div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="exampleInputImage" className="form-label col-lg-4 col-form-label">Main photo<span>* </span></label>
                <div className="col-lg-8">
                    <div className='icon-img-form  form-control '>
                        <img src={profileInfo.image} alt="" class="img-fluid" style={{ height: "100%", objectFit: "contain" }} />
                        {/* <i className="bi bi-camera"></i> */}
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="exampleInputStoreName" className="form-label col-lg-4 col-form-label">Store name<span>* </span></label>
                <div className='col-lg-8'>
                    <input type="text" name="storeName" defaultValue={profileInfo.name} className={`form-control ${errors.storeName ? 'is-invalid' : ''}`} {...register('storeName')} id="exampleInputStoreName1" />
                    <div className="invalid-feedback">{errors.storeName?.message}</div>
                </div>

            </div>
            <div className=" row mb-3">
                <label htmlFor="exampleInputPDescription" className="form-label col-lg-4 col-form-label">Description<span>* </span></label>
                <div className="form-floating col-lg-8">
                    <textarea name="storeDescription" defaultValue={profileInfo["store_description"]} className={`form-control text-from-description ${errors.storeDescription ? 'is-invalid' : ''}`} {...register('storeDescription')} id="floatingTextarea2" style={{ height: "120px", width: "100%" }} ></textarea>
                    <div className="invalid-feedback">{errors.storeDescription?.message}</div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputAddress2" className="form-label col-lg-4 col-form-label mb-2 pt-lg-0">Store address<span>* </span></label>
                <div className="col-lg-8 mt-lg-4">
                    <div className='row'>
                        <div className="col-6 mb-3 formulario-address" style={{ paddingRight: "6px" }}>
                            <label htmlFor="inputAddress2" className="form-label col-form-label mb-2 pt-lg-0">Street</label>
                            <input type="text" name="storeStreet" defaultValue={profileInfo.address} className={`form-control title-placeholder ${errors.storeStreet ? 'is-invalid' : ''}`} {...register('storeStreet')} id="exampleInputStreet1" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">{errors.storeStreet?.message}</div>
                        </div>
                        <div className="col-6 mb-3 formulario-address" style={{ paddingLeft: "0px" }}>
                            <label htmlFor="inputAddress2" className="form-label col-form-label mb-2 pt-lg-0">Postal code</label>
                            <input type="text" name="postcode" defaultValue={profileInfo.postcode} className={`form-control title-placeholder ${errors.postcode ? 'is-invalid' : ''}`} {...register('postcode')} id="exampleInputCodePostal1" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">{errors.postcode?.message}</div>
                        </div>
                        <div className="col-6 formulario-address" style={{ paddingRight: "6px" }}>
                            <label htmlFor="inputAddress2" className="form-label  col-form-label mb-2 pt-lg-0">City</label>
                            <input type="text" name="city" defaultValue={profileInfo.city} className={`form-control title-placeholder ${errors.city ? 'is-invalid' : ''}`} {...register('city')} id="inputCity" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">{errors.city?.message}</div>
                        </div>
                        <div className="col-6 formulario-address" style={{ paddingLeft: "0px" }}>
                            <label htmlFor="inputAddress2" className="form-label  col-form-label mb-2 pt-lg-0">Country</label>
                            <input type="text" name="country" defaultValue={profileInfo.country} className={`form-control title-placeholder ${errors.country ? 'is-invalid' : ''}`} {...register('country')} id="exampleInputCountry1" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">{errors.country?.message}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="exampleInputStoreWeb1" className="form-label col-lg-4 col-form-label">Store web<span>* </span></label>
                <div className='col-lg-8'>
                    <input type="text" name="storeWeb" defaultValue={profileInfo["web_page"]} className={`form-control  ${errors.storeWeb ? 'is-invalid' : ''}`} {...register('storeWeb')} id="exampleInputPassword1" />
                    <div className="invalid-feedback">{errors.storeWeb?.message}</div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="exampleNumber1" className="form-label col-lg-4 col-form-label">Phone Number<span>* </span></label>
                <div className='col-lg-8'>
                    <input type="text" name="phoneNumber" defaultValue={profileInfo["phone_number"]} className={`form-control  ${errors.phoneNumber ? 'is-invalid' : ''}`} {...register('phoneNumber')} id="exampleInputPassword1" />
                    <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                </div>
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-4">
                <button type="submit" className="btn btn-primary btn-formulario" >

                    Save
                </button>

                <Toaster position="bottom-left" />
            </div>

        </form>
    </div>)

    return (
        <div className="container px-4 pb-5 p-lg-0">


            {formProfile}


        </div >
    )
}

export default ProfileUserForm;
