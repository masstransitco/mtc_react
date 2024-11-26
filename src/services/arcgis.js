// arcgis.js

// src/services/arcgis.js

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export const initializeMap = (containerId) => {
  const map = new Map({
    basemap: 'streets-navigation-vector',
  });

  const view = new MapView({
    container: containerId,
    map: map,
    center: [-118.80500,34.02700], // Longitude, latitude
    zoom: 13,
  });

  return view;
};
