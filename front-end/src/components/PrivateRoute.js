import { Navigate } from "react-router-dom";
import toast from 'react-hot-toast';

function useAuth() {

  return localStorage.getItem('token')

}



export default function PrivateRoute({ children }) {
  const auth = useAuth();
  if (auth) {
    return children
  } else {

    toast.error("You must login or register first!!!")
    return <Navigate to="/" />
  }
  // return auth ? children : <Navigate to="/" />;
}
