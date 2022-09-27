import { Breadcrumb, Button, Card, Col, Pagination, Row } from "antd";

import { DUMMY_LIST } from "./../../helpers/constant";
import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchUnits } from "../../redux/reducer/unitsReducer";

const { Meta } = Card;

const Home = (props) => {
  const state = useSelector((storedState) => storedState.unit);
  console.log("Ini state: ", state);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  // const handlePagee = () => {
  //   navigate("form");
  // };

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch, state.action]);

  // if (state.isLoading) {
  //   return <p>Loading units...</p>;
  // } else if (!state.isLoading && !Array.isArray(state.units)) {
  //   return <p>guests not found</p>;
  // } else {
  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>unitsReducer</Breadcrumb.Item>
      </Breadcrumb>
      <GlobalWrapper>
        <h1 className="justify-content-center align-items-center">
          Apartment Units
        </h1>
        <Row gutter={16}>
          {state.units.map((item, idx) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              key={idx}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://skandinavia.co.id/wp-content/uploads/2020/12/apartement.jpg"
                  />
                }
              >
                <Meta
                  title="Apartment Unit"
                  description="Apartment Detail Desc"
                />
                <Button variant="primary">Check in</Button>{" "}
                <Button variant="warning">Check out</Button>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination
          style={{ marginBottom: "1rem" }}
          defaultCurrent={1}
          pageSize={9}
          total={DUMMY_LIST.length}
        />
      </GlobalWrapper>
    </>
  );
  //}
};

export default Home;

const GlobalWrapper = styled.div`
  min-height: 80vh;
`;
