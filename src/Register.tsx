import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { passRegex, emailRegex } from "./regex";

type FieldType = {
  username?: string;
  password1?: string;
  password2?: string;
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

const Register: React.FC<IProps> = ({ changeType }) => (
  <Form
    name="Register"
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
      name="password1"
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
    <Form.Item
      name="password2"
      dependencies={["password1"]}
      rules={[
        { required: true, message: "请确认密码!" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password1") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("两次密码不一致!"));
          },
        }),
      ]}
    >
      <Input.Password placeholder={"请二次确认密码"} />
    </Form.Item>

    <div className="bottom">
      <span></span>
      <Button type="link" onClick={() => changeType(1)}>
        登录
      </Button>
    </div>
    <Form.Item>
      <Button type="primary" block htmlType="submit">
        注册
      </Button>
    </Form.Item>
  </Form>
);

export default Register;
