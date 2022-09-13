import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet } from 'react-router-dom'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout

const GeekLayout = () => {
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
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              Overview
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              Manage you works
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
              Publish
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