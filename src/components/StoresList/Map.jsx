import React from 'react';
import GoogleMapReact from 'google-map-react';

function Map({center, zoom, style}){
    return (
      <div style={style}>
        <GoogleMapReact 
          key={{ key: 'AIzaSyAnr0Fg5dXcY8p75rkIRhEnv1N9D653w40' }}
          center={center}
          zoom={zoom}
        >
        </GoogleMapReact>
      </div>
    );
}

export default Map;
