// src/components/LeafletMap.jsx

import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('leaflet-map').setView([34.02700, -118.80500], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(34.02700, -118.80500),
        L.latLng(34.03700, -118.80500),
      ],
      routeWhileDragging: true,
    }).addTo(map);
  }, []);

  return <div id="leaflet-map" style={{ height: '500px', width: '100%' }}></div>;
};

export default LeafletMap;
