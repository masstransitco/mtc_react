// src/components/MapComponent.jsx

import React, { useEffect, useRef } from 'react';
import { initializeMap } from '../services/arcgis';
import './MapComponent.css'; // Create appropriate CSS for map container

const MapComponent = () => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      initializeMap(mapRef.current.id);
    }
  }, []);

  return <div id="arcgis-map" ref={mapRef} className="map-container"></div>;
};

export default MapComponent;
