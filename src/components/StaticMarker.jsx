// src/components/StaticMarker.jsx

import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

const StaticMarker = ({ position }) => {
  return (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: '/station-icon.png', // Provide a station icon
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })}
      draggable={false}
    />
  );
};

export default StaticMarker;
