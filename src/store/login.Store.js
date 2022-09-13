// login module

// 登录模块
import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, removeToken } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    console.log(res.data)
    this.token = res.data.token

    //write in local store
    setToken(this.token)

  }
}
export default LoginStore