import {createHeaders} from './index';
//API URL
const apiURL = process.env.REACT_APP_API_URL
//function to check if user already exist
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiURL}?username=${username}`)
        if (!response.ok){
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

//creating new user
const createUser = async (username) => {
    try {
        
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []

            })
        })
        if (!response.ok){
            throw new Error('could not create user with username ' + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}


export const loginUser = async (username) => {
    const [checkError, user ] = await checkForUser(username)
    
    if (checkError !== null) {
        return [checkError, null]
    }
    
    if (user.length > 0) {
        return [null, user.pop()]
    }

    return await createUser(username)
}