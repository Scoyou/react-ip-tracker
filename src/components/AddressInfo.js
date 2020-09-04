import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

const AddressInfo = (props) => {
  return (
    <Container fluid="md">
      <Row>
        <Col sm={12} lg={3}>
        <h3>IP Address</h3>
          <p>{props.ipAddr}</p>
        </Col>
        <Col sm={12} lg={3}>
          <h3>Location</h3>
          <p>{props.location && props.location.city}</p>
          <p>{props.location && props.location.region}</p>
        </Col>
        <Col sm={12} lg={3}>
          <h3>Timezone</h3>
          <p>{props.location && props.location.timezone}</p>
        </Col>
        <Col sm={12} lg={3}>
        <h3>ISP</h3>
          <p>{props.isp}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressInfo;
