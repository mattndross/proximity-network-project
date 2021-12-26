import './ProfileUserForm.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const ProfileUserForm = () => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),

        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),

        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        storeName: Yup.string().required('Store name is required'),
        description: Yup.string().required('Description is required'),
        street: Yup.string().required('Street is required'),
        postalCode: Yup.string().required('Postal code is required'),
        city: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),


    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    // Metodo onSubmit
    const onSubmit = data => {

        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <div className="container px-4 py-5 p-lg-0">
            <div className="d-flex title-content-profile">
                <Link to="/profile-user"><h2>PROFILE</h2></Link>
                <span>|</span>
                <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>
            </div>
            <div className='from-profile'>
                <form className="formulario-usuario" onSubmit={handleSubmit(onSubmit)}  >
                    <div className="row mb-3">
                        <label htmlFor="exampleInputName1" className="form-label col-lg-4 col-form-label">Full name<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="text" name="fullname" className={`form-control  col-lg-6  ${errors.fullname ? 'is-invalid' : ''}`} id="exampleInputName" {...register('fullname')}
                            />
                            <div className="invalid-feedback">{errors.fullname?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label col-lg-4 col-form-label">Email address<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="email" name="email" className={`form-control col-lg-6 ${errors.email ? 'is-invalid' : ''}`} {...register('email')} id="exampleInputEmail1" />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label col-lg-4 col-form-label">Password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="password" className={`form-control col-lg-6 ${errors.password ? 'is-invalid' : ''}`} {...register('password')} id="exampleInputPassword1" />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputConfirmePassword1" className="form-label col-lg-4 col-form-label">Confirmed Password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="confirmPassword" className={`form-control col-lg-6 ${errors.confirmPassword ? 'is-invalid' : ''}`} {...register('confirmPassword')} id="exampleInputPassword1" />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputStoreName" className="form-label col-lg-4 col-form-label">Store name<span>* </span></label>
                        <div className='col-lg-8'>
                            <input type="text" name="storeName" className={`form-control col-lg-6 ${errors.storeName ? 'is-invalid' : ''}`} {...register('storeName')} id="exampleInputStoreName1" />
                            <div className="invalid-feedback">{errors.storeName?.message}</div>
                        </div>

                    </div>
                    <div className=" row mb-3">
                        <label htmlFor="exampleInputPDescription" className="form-label col-lg-4 col-form-label">Description<span>* </span></label>
                        <div className="form-floating col-lg-8">
                            <textarea name="description" className={`form-control text-from-description col-lg-6 ${errors.description ? 'is-invalid' : ''}`} {...register('description')} id="floatingTextarea2" style={{ height: "120px" }}></textarea>
                            <div className="invalid-feedback">{errors.description?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputAddress2" className="form-label col-lg-4 col-form-label mb-2 pt-lg-0">Store address<span>* </span></label>
                        <div className="col-lg-8">
                            <div className='row'>
                                <div className="col-6 mb-3" style={{ paddingRight: "6px" }}>
                                    <input type="text" name="street" className={`form-control title-placeholder ${errors.street ? 'is-invalid' : ''}`} {...register('street')} id="exampleInputStreet1" aria-describedby="emailHelp" placeholder="street" />
                                    <div className="invalid-feedback">{errors.street?.message}</div>
                                </div>
                                <div className="col-6 mb-3" style={{ paddingLeft: "0px" }}>
                                    <input type="text" name="postalCode" className={`form-control title-placeholder ${errors.postalCode ? 'is-invalid' : ''}`} {...register('postalCode')} id="exampleInputCodePostal1" aria-describedby="emailHelp" placeholder="postal code" />
                                    <div className="invalid-feedback">{errors.postalCode?.message}</div>
                                </div>
                                <div className="col-6 " style={{ paddingRight: "6px" }}>
                                    <input type="text" name="city" className={`form-control title-placeholder ${errors.city ? 'is-invalid' : ''}`} {...register('city')} id="inputCity" aria-describedby="emailHelp" placeholder="City" />
                                    <div className="invalid-feedback">{errors.city?.message}</div>
                                </div>
                                <div className="col-6" style={{ paddingLeft: "0px" }}>
                                    <input type="text" name="country" className={`form-control title-placeholder ${errors.country ? 'is-invalid' : ''}`} {...register('country')} id="exampleInputCountry1" aria-describedby="emailHelp" placeholder="Country" />
                                    <div className="invalid-feedback">{errors.country?.message}</div>
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

                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-4">
                        <button type="submit" className="btn btn-primary btn-formulario">Save</button>
                        <button type="button" onClick={() => reset()} className="btn btn-primary btn-formulario-reset ml-3">Reset</button>
                    </div>

                </form>
            </div>


        </div >
    )
}

export default ProfileUserForm;
