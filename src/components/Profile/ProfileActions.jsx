import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete} from '../../utils/storage';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
        <ButtonGroup vertical>
            <Button variant="warning" href='/translate'>Translate</Button>
            <Button variant="danger">Clear History</Button>
            <Button variant="danger"  onClick={ handleLogoutClick}>Log Out</Button>
            </ButtonGroup>
    )
}
export default ProfileActions