import React from 'react';

import Banner from './components/Banner';
import Map from './components/Map';


function App() {
  return (
    <div className="App">
      <Banner />
      <Map coordinates={"Space+Needle,Seattle+WA"} />
    </div>
  );
}

export default App;
