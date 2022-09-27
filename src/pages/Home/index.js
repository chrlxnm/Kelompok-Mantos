import { Breadcrumb, Card, Col, Pagination, Row } from 'antd';

import { DUMMY_LIST } from './../../helpers/constant';
import { GlobalWrapper } from './../../components/Wrapper/index';
import React from 'react';
import styled from 'styled-components';

const {Meta} = Card;

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
        <GlobalWrapper>
            <h1 className="justify-content-center align-items-center"> Home Page </h1>
            <Row gutter={16}>
              {
                DUMMY_LIST.map((item, idx) => 
                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={idx}  style={{marginTop: '1rem', marginBottom: '1rem'}}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col> )
              }
            </Row>
            <Pagination style={{marginBottom: '1rem'}} defaultCurrent={1} pageSize={9} total={DUMMY_LIST.length} />
        </GlobalWrapper>
        </>
    );
};

export default Home;