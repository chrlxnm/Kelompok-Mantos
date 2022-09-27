import './App.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, redirect } from 'react-router-dom';

import PrivateRoute from './components/privateRoute/index';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;

function App() {
  const items = [
    {
    key: 'home',
    label: 'Home',
    onClick: ()=> redirect('/'),
    },
    {
    key: 'report',
    label: 'Report',
    onClick: ()=> console.log('hehehe'),
    }
]
  return (
    <Layout className="App layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['report']}
          items={items}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <PrivateRoute /> 
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#001529',
          color: "#ffffff"
        }}
      >
      Apartment Management System ©2022 Created by Kelompok Mantos
    </Footer>
  </Layout>
  );
}

export default App;
