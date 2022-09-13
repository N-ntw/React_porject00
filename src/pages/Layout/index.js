import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, Link, useLocation} from 'react-router-dom'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const {pathname} = useLocation();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="Are you sure you want to exit" okText="Exit" cancelText="Go back">
              <LogoutOutlined /> Exit
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

export default GeekLayout