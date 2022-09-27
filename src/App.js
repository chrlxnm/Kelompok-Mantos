import './App.css';
import "./App.css";

import { Breadcrumb, Button, Col, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import { LogoutOutlined } from "@ant-design/icons";
import PrivateRoute from './components/privateRoute/index';
import logo from './logo.svg';
import { useCallback } from "react";

const { Header, Content, Footer } = Layout;

export function Logout() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );


  return (
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Button type="danger" shape="round" onClick={handleOnClick}>
        Logout
      </Button>
    </Col>
  );
}

function App() {
  const items = [
    {
    key: 'home',
    label: 'Home',
    },
    {
    key: 'report',
    label: 'Report',
    onClick: ()=> console.log('hehehe'),
    }
]
  return (
    <Layout className="App layout">
      {window.location.pathname !=='/login' && <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['report']}
          items={items}
        />
        <Logout />
      </Header>}
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <PrivateRoute /> 
      </Content>
      {window.location.pathname !=='/login' && <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "#ffffff",
        }}
      >
        Apartment Management System ©2022 Created by Kelompok Mantos
      </Footer> }
    </Layout>
  );
}

export default App;
