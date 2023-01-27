import LoginForm from '../components/Login/LoginForm'
const Login = () => {
  //returns loginform to loginpage
  return (
    <>
    <div className="login">
      <img src ="resources\LostInTranslation_Resources\Logo.png" alt="splash" width="155"/>
      <h1> Login </h1>
      <div className="translation-list">
        <LoginForm/>
      </div>
    </div>
    </>
  )
}
export default Login