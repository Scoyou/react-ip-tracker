import React from "react";

import useWindowDimensions from "./useWindowDimensions";

const Map = (props) => {
  const { width } = useWindowDimensions();
  return (
    <div>
      {console.log(process.env.REACT_APP_GOOGLE_API_KEY)}
      <iframe
        title="GoogleMap"
        width={width}
        height="700"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${props.coordinates}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
