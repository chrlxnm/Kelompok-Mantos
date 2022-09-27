import './App.css';

import { Breadcrumb, Layout, Menu } from 'antd';

import HelloWorld from './pages/HelloWorld';
import { Outlet } from 'react-router-dom';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;

function App() {
  const items = [
    {
    key: 'home',
    label: 'Home',
    },
    {
    key: 'report',
    label: 'Report'
    }
]
  return (
    <Layout className="App layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items
          //   new Array(15).fill(null).map((_, index) => {
          //   const key = index + 1;
          //   return {
          //     key,
          //     label: `nav ${key}`,
          //   };
          // })
        }
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Outlet /> 
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
