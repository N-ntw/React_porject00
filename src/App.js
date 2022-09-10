import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import {Button} from 'antd'
// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Button type="primary">Button</Button>
       <Routes>
            <Route path="" element={<Layout/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App