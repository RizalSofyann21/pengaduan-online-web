// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  UserOutlined,
  // BookOutlined,
  DashboardOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./DashboardPage";
import Masyarakat from "./MasyarakatPage";
import Pengaduan from "./PengaduanPage";

const { Header, Sider, Content } = Layout;

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" disabled>
            <h1>Web Admin</h1>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FolderOpenOutlined />}>
            <Link to="/pengaduan">Data Pengaduan</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/masyarakat">Data Masyarakat</Link>
          </Menu.Item>
          {/* <Menu.Item key="5" icon={<BookOutlined />}>
            <Link to="/laporan">Laporan</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}
          <p></p>
          <h2>Sistem Pengaduan</h2>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 630,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pengaduan" element={<Pengaduan />} />
            <Route path="/masyarakat" element={<Masyarakat />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
