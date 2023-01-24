import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"

const Profile = () => {
  return (
    <>
    <h1>Profile</h1>
    <ProfileHeader/>
    <ProfileActions/>
    <ProfileTranslationHistory/>
    </>
)
}
export default withAuth(Profile)