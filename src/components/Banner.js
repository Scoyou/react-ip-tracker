import React from "react";
import { Image, Container } from "react-bootstrap";

import background from "../images/pattern-bg.png";
import useWindowDimensions from "./useWindowDimensions";
import Styles from "../styles/Styles";
import IpInput from "./IpInput";

const Banner = (props) => {
  const { width } = useWindowDimensions();

  return (
    <Container fluid style={Styles.bannerContainer}>
      <Image src={background} width={width} />
      <div style={Styles.bannerText}>
        <h1>IP Address Tracker</h1>
      </div>
      <div style={Styles.ipInput}>
        <IpInput />
      </div>
    </Container>
  );
};

export default Banner;
