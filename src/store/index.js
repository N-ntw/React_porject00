//统一管理
import React from "react"
import LoginStore from "./login.Store"

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
        //...
    }
}

//实例化root
const rootStore = new RootStore()

//导出 useStore context
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export {useStore}