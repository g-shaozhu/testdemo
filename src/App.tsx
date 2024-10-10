import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Login from "./Login";
import Register from "./Register";
import "./app.scss";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  const [type, setType] = useState<number>(1);
  const changeType = (type: number) => {
    setType(type);
  };
  return (
    <div className="wrapper">
      <div className="title">{type === 1 ? "登录" : "注册"}</div>
      {type === 1 ? (
        <Login changeType={changeType} />
      ) : (
        <Register changeType={changeType} />
      )}
    </div>
  );
};

export default App;
