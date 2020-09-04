import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Banner from "./components/Banner";

class App extends Component {

  render() {
    return (
      <Container fluid>
        <Banner />
      </Container>
    );
  }
}

export default App;
