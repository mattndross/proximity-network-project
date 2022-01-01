import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function useAuth() {

  return localStorage.getItem('token')

}



export default function PrivateRoute({ children }) {
  const auth = useAuth();
  if (auth) {
    return children
  } else {

    toast.error("Debes loguearte primero!!")
    return <Navigate to="/" />
  }
  // return auth ? children : <Navigate to="/" />;
}
