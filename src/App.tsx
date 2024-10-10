import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input }  from 'antd'

type FieldType = {
  username ?: string;
  password?: string;
  remember?: string;
};

const onFinish:  FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo)  => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input placeholder={'请输入用户名'}/>
      </Form.Item>

      <Form.Item
          name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password placeholder={'请输入密码'}/>
      </Form.Item>

      <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
);

export default App;