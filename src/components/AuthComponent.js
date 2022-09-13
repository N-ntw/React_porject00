// Chech if there exist token
//2. Then render if exist
//3. otherwise, redirect to login page

// What we need: 高阶组件: 把一个组件当成另外一个组件的参数传入
// 然后通过判断， 返回新的组件
import {getToken} from '@/utils'
// Navigate 重定向组件
import {Navigate} from 'react-router-dom'

function AuthRoute ({ children }) {
    const isToken = getToken()
    if (isToken) {
      return <>{children}</>
    } else {
        //没有token则用Navigate组件重定向
      return <Navigate to="/login" replace />
    }
  }

export {
    AuthRoute
}

  //示例用法
  //<AuthRoute> <Layout/> <AuthRoute>