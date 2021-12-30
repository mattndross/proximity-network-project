import { Navigate } from "react-router-dom";


function useAuth() {
  
  return true 

}



export default function PrivateRoute({ children }) {
const auth = useAuth();
return auth ? children : <Navigate to="/" />;
}
