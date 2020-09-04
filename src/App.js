import React from 'react';
import Container from 'react-bootstrap/Container'

import Banner from './components/Banner';
import Map from './components/Map';


function App() {
  return (
    <Container fluid>
      <Banner />
      <Map coordinates={"Space+Needle,Seattle+WA"} />
    </Container>
  );
}

export default App;
