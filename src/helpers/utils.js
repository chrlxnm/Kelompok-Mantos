import { encryptStorage } from "./services"

export const saveToken = (token) => {
    encryptStorage.setItem('loginToken',token)
}

export const handleLogout = (token) => {
    encryptStorage.removeItem('loginToken')
}