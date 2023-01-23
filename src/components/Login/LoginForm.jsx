import {useForm } from  'react-hook-form'

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

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)

    }
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
                
                <button type='submit'>Continue</button>
            </form>
        </>
    )
}

export default LoginForm