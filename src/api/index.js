//API key to access to API
const apiKey = process.env.REACT_APP_API_KEY
//creating headers for API request
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}