import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete, storageSave} from '../../utils/storage';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ClearTranslationHistory } from '../../api/translation';

//profile actions
const ProfileActions = () => {
    //to get current user
    const { user ,setUser } = useUser()
    //log out button for user by deleting local storagekey
    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const clearHistory = async () => {
        if (!window.confirm("Are you sure?\n this can not be undone")) {
          return;
        }
        const [clearError] = await ClearTranslationHistory(user.id);
        if (clearError !== null) {
          return [clearError, null];
        }
        console.log(clearError);
    
        const updatedUser = {
          ...user,
          translations: []
        };
    
        console.log(updatedUser);
        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
      };
    //return user action buttons
    return (
        <ButtonGroup vertical>
            <Button variant="danger" onClick={clearHistory}>Clear History</Button>
            <Button variant="danger"  onClick={ handleLogoutClick}>Log Out</Button>
            </ButtonGroup>
    )
}
export default ProfileActions