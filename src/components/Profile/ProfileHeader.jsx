const ProfileHeader =({username}) => {
    //header component for profilepage
    return (
        <header class ="header">
            <h4>Hello, welcome back <b>{username}</b></h4>
        </header>
    )
}

export default ProfileHeader