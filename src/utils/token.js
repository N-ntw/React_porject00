//token持久化
//封装ls存取token

const key = 'pc-key'

//存取删三个token
const setToken = () =>{
    window.localStorage.setItem(key, toekn)
}

const getToken = () =>{
    window.localStorage.getItem(key)
}

const removeToken = () =>{
    window.localStorage.removeItem(key)
}