import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import {AuthRoute} from '@/components/AuthComponent'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'
import Publish from './pages/Publish'
// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Routes>
          {/* Layout需要路由鉴权处理 */}
          {/* 这里需要进行判断 */}
          <Route path="/" element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
          }>
          {/* 二级路由默认页面 */}
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="publish" element={<Publish />} />
          </Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App