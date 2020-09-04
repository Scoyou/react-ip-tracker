import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Styles from "../styles/Styles";

const AddressInfo = (props) => {
  return (
    <Container style={Styles.addrContainer} fluid="md">
      <Row>
        <Col sm={12} lg={3}>
          <h6>IP Address</h6>
          <p>{props.ipAddr}</p>
        </Col>
        <Col sm={12} lg={3}>
          <h6>Location</h6>
          <p>{props.location && props.location.city}</p>
          <p>{props.location && props.location.region}</p>
        </Col>
        <Col sm={12} lg={3}>
          <h6>Timezone</h6>
          <p>{props.location && props.location.timezone}</p>
        </Col>
        <Col sm={12} lg={3}>
          <h6>ISP</h6>
          <p>{props.isp}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressInfo;
