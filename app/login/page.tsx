'use client';

import React from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../store/useAuthStore';

const { Title } = Typography;

interface LoginValues {
  username?: string;
  password?: string;
}

const LoginPage: React.FC = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const onFinish = (values: LoginValues) => {
    console.log('Received values of form: ', values);
    if (values.username) {
      login(values.username);
      message.success('登录成功');
      router.push('/home');
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="w-100 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <div className="text-center mb-6">
          <Title level={3} className="m-0!">用户登录</Title>
          <Typography.Text type="secondary">欢迎回来，请登录您的账户</Typography.Text>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入用户名!' },
              { min: 6, message: '用户名不能少于6位!' }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码!' },
              { min: 8, message: '密码不能少于8位!' },
              { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/, message: '密码必须包含大写、小写字母和特殊字符!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
