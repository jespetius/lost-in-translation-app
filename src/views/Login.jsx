import LoginForm from '../components/Login/LoginForm'
const Login = () => {
  return (
    <>
    <div class="login">
      <img src ="resources\LostInTranslation_Resources\Logo.png" alt="splash" width="155"/>
      <h1> Login </h1>
      <div class="translation-list">
        <LoginForm/>
      </div>
    </div>
    </>
  )
}
export default Login