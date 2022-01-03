import "./GenericError.css"
import iconError from '../../assets/img/menssage-error/error.png'

const GenericError = () => {
    console.log("gio")
  return(
      <div className="col-lg-12 text-center" style={{ padding: "100px" }}>
        <img src={iconError} alt='icon-error' className='img-fluid' />
      <p className='parrafo-error'>
        This is not the web page you
      </p>
      </div>
  )
}
export default GenericError;
