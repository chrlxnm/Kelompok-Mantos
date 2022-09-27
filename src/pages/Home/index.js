import { Breadcrumb } from 'antd';
import React from 'react';

const Home = (props) => {
    return (<>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h1> Home Page </h1>
        </div>
        </>
    );
};

export default Home;