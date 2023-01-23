import { useState } from 'react'
import {useForm } from  'react-hook-form'
import { loginUser } from '../../api/user'
//to validate username
const usernameConfig = {
    required: true,
    minLength: 5
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const [loading, setLoading] =useState(false)

    const onSubmit = async ({username}) => {
        setLoading(true)
        const [error, user] = await loginUser(username)
        console.log(2 + error)
        console.log(1 + user)
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
            </form>
        </>
    )
}

export default LoginForm