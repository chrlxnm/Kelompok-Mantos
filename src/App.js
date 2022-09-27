import './App.css';
import "./App.css";

import { Breadcrumb, Button, Col, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import { LogoutOutlined } from "@ant-design/icons";
import PrivateRoute from './components/privateRoute/index';
import { handleLogout } from './helpers/utils';
import logo from './logo.svg';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

export function Logout() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => {
      handleLogout();
      navigate("/login", { replace: true })
    },
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

  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <Layout className="App layout">
      {/* {window.location.pathname !=='/login' && <Header> */}
        <div className="logo" />
        <Menu
        >
          <MenuItem active={activeMenu==='home'} onClick={()=>setActiveMenu('home')} key="Home">Home</MenuItem>
          <MenuItem active={activeMenu==='report'} onClick={()=>setActiveMenu('report')} key="Report">Report</MenuItem>
          <MenuItem active={activeMenu==='transactions'} onClick={()=>setActiveMenu('transactions')} key="Transactions">Transactions</MenuItem>              
          <Logout />
        </Menu>
      {/* </Header>} */}
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

const Menu = styled.div`
  width: 100%;
  background-color: #001529;
  display: flex;
  height: 50px;
  padding: 0rem 1rem;
  align-items: center;
`
const MenuItem = styled.div`
  color: #ffffff;
  cursor: pointer;
  padding: 0 1rem;
  display: flex;
  height: 100%;
  align-items: center;
  background-color: ${({ active }) => active? '#096dd9' : null };
  &:hover{
    background-color: #40a9ff;
  }
`