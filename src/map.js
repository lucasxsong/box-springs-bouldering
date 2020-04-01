/* global document */
import React, {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY; // Set your mapbox token here

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 33.993,
    longitude: -117.30,
    //33.983098, -117.300571
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

//document.body.style.margin = 0;
//render(<Root />, document.body.appendChild(document.createElement('div')));

export default Map;