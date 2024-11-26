// src/components/DraggableMarker.jsx

import React, { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const DraggableMarker = ({ position, onDragEnd }) => {
  const [draggable, setDraggable] = useState(true);
  const markerRef = React.useRef(null);

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        const newPos = marker.getLatLng();
        onDragEnd(newPos);
      }
    },
  };

  return (
    <Marker
      position={position}
      draggable={draggable}
      eventHandlers={eventHandlers}
      ref={markerRef}
      icon={L.icon({
        iconUrl: '/car-icon.png', // Provide a car icon
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })}
    ></Marker>
  );
};

export default DraggableMarker;
