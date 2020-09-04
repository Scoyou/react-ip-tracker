import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddressInfo = (props) => {
  return (
    <div>
      <Row>
        <Col>
          IP Address
          {props.ipAddr}
        </Col>
        <Col>
          Location
          {props.location && props.location.city}
          {props.location && props.location.region}
        </Col>
        <Col>
          Timezone
          {props.location && props.location.timezone}
        </Col>
        <Col>
          ISP
          {props.isp}
        </Col>
      </Row>
    </div>
  );
};

export default AddressInfo;
