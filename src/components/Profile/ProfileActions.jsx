import {Link } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete} from '../../utils/storage';


const ProfileActions = () => {

    const { setUser } = useUser()
    
    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translate">Translate</Link></li>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogoutClick}>Log Out</button></li>
        </ul>
    )
}
export default ProfileActions