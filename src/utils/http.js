// axios

// initialize request response

import axios from "axios";

const http = axios.create ({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

//Request blocker
http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

//Response blocker
http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export {http}