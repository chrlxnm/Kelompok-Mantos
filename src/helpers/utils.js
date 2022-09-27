import { encryptStorage } from "./services"

export const saveToken = (token) => {
    console.log()
    encryptStorage.setItem('loginToken', token)
}

export const handleLogout = (token) => {
    encryptStorage.removeItem('loginToken')
}