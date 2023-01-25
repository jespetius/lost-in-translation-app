import {Link } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete} from '../../utils/storage';

//profile actions
const ProfileActions = () => {
    //to get current user
    const { setUser } = useUser()
    //log out button for user by deleting local storagekey
    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    //return user action buttons
    return (
        <ul>
            <li><Link to="/translate">Translate</Link></li>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogoutClick}>Log Out</button></li>
        </ul>
    )
}
export default ProfileActions