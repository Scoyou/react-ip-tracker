import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";

import background from "../images/pattern-bg.png";
import useWindowDimensions from "./useWindowDimensions";
import Styles from "../styles/Styles";
import IpInput from "./IpInput";
import Map from "./Map";

const Banner = (props) => {
  const [location, setLocation] = useState("");
  const { width } = useWindowDimensions();

  return (
    <div>
      <div>
        <Image src={background} width={width} />
        <Container fluid style={Styles.bannerContainer}>
          <div style={Styles.bannerText}>
            <h1>IP Address Tracker</h1>
          </div>
          <div style={Styles.ipInput}>
            <IpInput setLocation={setLocation} />
          </div>
        </Container>
      </div>
      <div>
        <Map
          coordinates={
            location === ""
              ? "Space+Needle,Seattle+WA"
              : `${location.lat}, ${location.lng}`
          }
        />
      </div>
    </div>
  );
};

export default Banner;
