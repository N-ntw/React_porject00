import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useNavigate } from 'react-router-dom'
// 导入样式文件
import './index.scss'
import { useStore } from '@/store'


function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  async function onFinish (values) {
    console.log(values)
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    await loginStore.login({
      mobile:values.mobile,
      code:values.code
    })
    // 提示用户
    message.success('Login Succeed')
    navigate('/',{replace:true})
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
        <Form
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
            mobile: '13811111111',
            code: '246810'
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: 'Input your phone number',
              },
              {
                len: 11,
                message: 'The pattern does not match',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="Please input your phone number" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
              {
                len: 6,
                message: 'It must be 6 digit',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="Please input the validation number" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"

          >
            <Checkbox className="login-checkbox-label">
              I agreed to all the terms
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login