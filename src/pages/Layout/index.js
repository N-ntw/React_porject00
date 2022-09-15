import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, Link, useLocation, useNavigate} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { useStore } from '@/store'
import UserStore from '@/store/user.Store'
import { useEffect } from 'react'
import LoginStore from '@/store/login.Store'

const { Header, Sider } = Layout


const GeekLayout = () => {
  const {pathname} = useLocation();
  const {userStore, loginStore} = useStore()
  
  useEffect (() => {
    userStore.getUserInfo()
  }, [userStore])

  // Confirm logout
  const navigate = useNavigate()  //useNavigate: use to redirect 
  const onLogout = () => {
      loginStore.loginOut()
      navigate('/login')
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.mobile}</span>

          {/* Log out session */}
          <span className='user-logout'>
            <Popconfirm 
            onConfirm={onLogout}
            title = "Are you sure to log out?" okText="Logout" cancelText = "Cancle">
              <LogoutOutlined/> Logout
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[pathname]}  /* 按钮的高亮，默认高亮Overview。 Path路径决定高亮的盒子(useLocation 能做到) */
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              {/* Link, used to redirect  */}
              <Link to={'/'}>Overview</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to={'/article'}>Manage you works</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to = {'/publish'}>Publish</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet /> {/* 二级路由出口 */}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)