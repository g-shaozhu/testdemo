import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { passRegex, emailRegex } from "./regex";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
interface IProps {
  changeType: (type: number) => void;
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC<IProps> = ({ changeType }) => (
  <Form
    name="login"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[
        () => ({
          validator(_, value) {
            if (emailRegex.test(value)) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error("请输入正确的邮箱"));
            }
          },
        }),
      ]}
    >
      <Input placeholder={"请输入用户名"} />
    </Form.Item>

    <Form.Item
      name="password"
      rules={[
        () => ({
          validator(_, value) {
            if (passRegex.test(value)) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error("密码为长度8位大小写字母加数字"));
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={"请输入密码"} />
    </Form.Item>

    <div className="bottom">
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>
      <Button type="link" onClick={() => changeType(2)}>
        注册
      </Button>
    </div>
    <Form.Item>
      <Button type="primary" block htmlType="submit">
        登录
      </Button>
    </Form.Item>
  </Form>
);

export default Login;
