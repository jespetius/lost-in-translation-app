import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () => {
    
    const { user } = useUser()

    return (
        <nav>
            <ul>
                <li>Translator</li>
            </ul>

            { user !== null &&
            <ul>
                <li>
                <NavLink to="/translate">Translate</NavLink>
                </li>
                <li>
                    <NavLink to ="/profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default NavBar