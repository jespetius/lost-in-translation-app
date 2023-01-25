//function to save storagekey
export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
//to read storagekey
export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data){
        return JSON.parse(data)
    }

    return null
}
//to delete key
export const storageDelete = key => {
    localStorage.removeItem(key)
}