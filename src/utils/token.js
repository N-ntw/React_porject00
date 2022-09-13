//token持久化
//封装localStore存取token

const key = 'pc-key'

//存取删三个token
const setToken = (token) =>{
    return window.localStorage.setItem(key, token)
}

const getToken = () =>{
    return window.localStorage.getItem(key)
}

const removeToken = () =>{
    return window.localStorage.removeItem(key)
}

export {
    setToken,
    getToken,
    removeToken
}