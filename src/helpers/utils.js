export const saveToken = (token) => {
    localStorage.setItem('loginToken',token)
}

export const handleLogout = (token) => {
    localStorage.removeItem('loginToken')
}