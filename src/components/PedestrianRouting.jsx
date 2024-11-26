// src/components/PedestrianRouting.jsx

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

const PedestrianRouting = ({ start, end }) => {
  useEffect(() => {
    if (!start || !end) return;

    const map = L.map('pedestrian-routing-map').setView(start, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.Routing.control({
      waypoints: [L.latLng(start), L.latLng(end)],
      router: L.Routing.osrmv1({
        profile: 'foot', // Pedestrian routing
      }),
      geocoder: L.Control.Geocoder.nominatim(),
      routeWhileDragging: true,
      showAlternatives: false,
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }],
      },
    }).addTo(map);
  }, [start, end]);

  return <div id="pedestrian-routing-map" style={{ height: '500px', width: '100%' }}></div>;
};

export default PedestrianRouting;
