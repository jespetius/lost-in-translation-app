import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
//to check if there are user, if not, return to path /
const withAuth = Component => props => {
    const { user } =useUser()
    if (user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default withAuth