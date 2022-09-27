import { Layout, Menu } from "antd";

import { Logout } from './../../App';
import PrivateRoute from './../privateRoute/index';
import Transactions from './../../pages/Transactions/index';

const { Header, Content, Footer } = Layout;

   
const LayoutComponent = (props) => {
    console.log('hahha', props?.element)
    return(
    <Layout className="App layout">
        {window.location.pathname !=='/login' && <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
        >
            <Menu.Group> 
                <Menu.Item key="Home">Home</Menu.Item>
                <Menu.Item key="Report">Report</Menu.Item>
                <Menu.Item key="Transactions">Transactions</Menu.Item>
            </Menu.Group>
        </Menu>
        <Logout />
        </Header>}
        <Content
        style={{
            padding: "0 50px",
        }}
        >
        APASIH
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
    )
}

export default LayoutComponent;