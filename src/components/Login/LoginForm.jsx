import { useState, useEffect } from 'react'
import {useForm } from  'react-hook-form'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';

//to validate username
const usernameConfig = {
    required: true,
    minLength: 5
}
//creating LoginForm component
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const {user , setUser} = useUser()
    //to navigate users
    const navigate = useNavigate()
    //while fetching, creating loading "screen"
    const [loading, setLoading] =useState(false)
    //api errors
    const [ apiError, setApiError] = useState(null)

    useEffect(() => {
        //found user, redirect to Profile page
        if (user !== null){
            navigate('profile')
        }
       console.log('user has changed', user)

    }, [user, navigate])

    //submit action
    const onSubmit =  async ({username}) =>{
        //turn on loading features
        setLoading(true);
        const [error, userResponse] = await loginUser(username)
        //if error found, set error as apierror
        if (error!==null) {
            setApiError(error)
        }
        //if getting response back, save user key and set user
        if (userResponse !== null) {
            //save key
            storageSave(STORAGE_KEY_USER, userResponse)
            //set user
            setUser(userResponse)
        }
        //turn off loading features
        setLoading(false)
    };
  
    //Errormessage function to show user username problems
    const errorMessage = (() => {
        if (!errors.username){
            return null
        }
        //if no username given
        if (errors.username.type === 'required'){
            return <span> Username is required</span>
        }
        //if username less than 5 chars
        if (errors.username.type === 'minLength'){
            return <span>Username is too short(min 5)</span>
        }
    })()


    //returning form
    return (
        <>
            <h2> What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" placeholder='JohnDoe' {...register("username", usernameConfig)} />
                    {errorMessage}
                </fieldset>
                
                <button type='submit' disabled={loading}>Continue</button>
                {loading && <p>Logging in ...</p>}
                { apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}

export default LoginForm