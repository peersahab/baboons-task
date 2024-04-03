import { Button, Card, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
const Login = ({ setUser }) => {
  const onFinish = ({ email }) => {
    setUser(email);
  }

  return (
    <div className="full-height container">
      <Card
        bordered
        title="Login"
        style={{ width: '30vw' }}
        styles={{ header: {fontSize: '2rem', fontWeight: 'normal'} }}
      >
        <div>
          <Form onFinish={onFinish} name="auth">
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email Address!' }]}
            >
              <Input
                size="large"
                placeholder="baboon@baboons.com"
                prefix={<MailOutlined  />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                size="large"
                type="password"
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: '100%' }}
                size="large"
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
