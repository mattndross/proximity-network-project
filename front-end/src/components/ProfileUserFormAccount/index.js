import './ProfileUserFormAccount.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ProfileUserService from '../../services/profileUser.service'
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

const ProfileUserFormAcount = () => {
    const validationSchema = Yup.object().shape({
        currentPassword: Yup.string()
            .required('Your current password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),

        newPassword: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),

        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('newPassword'), null], 'Confirm Password does not match'),
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    // Metodo onSubmit
    const onSubmit = ({ currentPassword, newPassword }) => {

        const toasId = toast.custom(<div>
            <button class="btn btn-primary button-loading-user" style={{ backgroundColor: "#408e0a", opacity: "1", fontWeight: "700" }} type="button" disabled>
                <span class="spinner-border spinner-border-sm" style={{ color: "white", fontSize: "26px" }} role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>)

        const data = { currentPassword, newPassword }
        console.log(JSON.stringify(data, null, 2));
        setTimeout(() => {


            ProfileUserService.updatePassword(data).then(
                (response) => {
                    toast.remove(toasId)

                    toast.success("Password updated successfully!", {
                        style: {
                            backgroundColor: "#408e0a",
                            color: "white",
                            padding: "20px",
                            fontSize: "20px"
                        },
                    })

                }
            ).catch((e) => {
                console.log("EEROROR => ", e)
                toast.remove(toasId)
                toast.error("Password error!!!", {
                    style: {
                        padding: "20px",
                        fontSize: "20px"
                    }
                })
            })

        }, 1000)
    };

    return (
        <div className="container px-4 pb-5 p-lg-0">
            <div className='from-profile-account'>
                <form className="formulario-user-account" onSubmit={handleSubmit(onSubmit)}  >
                    <div className="row mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label col-lg-4 col-form-label">Current password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="currentPassword" className={`form-control col-lg-6 ${errors.currentPassword ? 'is-invalid' : ''}`} {...register('currentPassword')} id="exampleCurrentpassword1" />
                            <div className="invalid-feedback">{errors.currentPassword?.message}</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label col-lg-4 col-form-label">new password<span>* </span></label>
                        <div className="col-lg-8">
                            <input type="password" name="newPassword" className={`form-control col-lg-6 ${errors.newPassword ? 'is-invalid' : ''}`} {...register('newPassword')} id="exampleInputPassword1" />
                            <div className="invalid-feedback">{errors.newPassword?.message}</div>
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
                        <Toaster position="bottom-left" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default ProfileUserFormAcount;