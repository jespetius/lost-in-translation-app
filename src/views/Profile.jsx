import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {
  //get current user
  const { user } = useUser()
  //retuns Profile components to Profilepage
  return (
    <>
    <ProfileHeader username = { user.username} />
    <ProfileActions/>
    <ProfileTranslationHistory translations = {user.translations}/>
    </>
)
}
export default withAuth(Profile)