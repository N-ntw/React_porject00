// axios

// initialize request response

import axios from "axios";
import { getToken } from "./token";
import{history} from './history'

const http = axios.create ({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

//Request blocker
http.interceptors.request.use((config) => {
    // 注入token
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
    
}, (error) => {
    return Promise.reject(error)
})

//Response blocker
http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (error.response.status === 401) {
        // If error status is 401 (meaning key token lost its validation)
        //redrict to login page and ask user to login again to refresh the token
        // Problem!!
        // reactRoute, in defalut setting, do not support route redirection

        //Solution 1: React official solution

        history.push('/login')



        // Solution 2: window.location.href = '/login'
    }
    return Promise.reject(error)
})

export {http} 