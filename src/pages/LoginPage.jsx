// src/pages/Login.js
// import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import the CSS file
import logo from "../assets/logo.png"; // Import the logo image

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Submitting login request with values:", values);

    axios
      .post("http://localhost:3000/admin/login", values)
      .then((response) => {
        console.log("Login response:", response.data);

        if (response.data.success) {
          message.success("Login successful");
          navigate("../pages/DashboardPage.jsx");
        } else {
          message.error("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        message.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
