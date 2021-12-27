import './ProfileUserFormAccount.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ProfileUserFormAcount = () => {
    const validationSchema = Yup.object().shape({
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
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    // Metodo onSubmit
    const onSubmit = data => {

        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <div className="container px-4 py-5 p-lg-0">
            <div className="d-flex title-content-account">
                <Link to="/profile-user"><h2>PROFILE</h2></Link>
                <span>|</span>
                <Link to="/profile-account"><h2>ACCOUNT</h2></Link>
                <span>|</span>
                <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>
            </div>
            <div className='from-profile-account'>
                <form className="formulario-user-account" onSubmit={handleSubmit(onSubmit)}  >
                    <div className="row mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label col-lg-4 col-form-label">New email<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="email" name="email" className={`form-control col-lg-6 ${errors.email ? 'is-invalid' : ''}`} {...register('email')} id="exampleInputEmail1" />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label col-lg-4 col-form-label">new password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="password" className={`form-control col-lg-6 ${errors.password ? 'is-invalid' : ''}`} {...register('password')} id="exampleInputPassword1" />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputConfirmePassword1" className="form-label col-lg-4 col-form-label">Confirmed new password <span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="confirmPassword" className={`form-control col-lg-6 ${errors.confirmPassword ? 'is-invalid' : ''}`} {...register('confirmPassword')} id="exampleInputPassword1" />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-4">
                        <button type="submit" className="btn btn-primary btn-account-user">Update</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default ProfileUserFormAcount;