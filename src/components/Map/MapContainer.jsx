import React, { useEffect, useRef } from 'react';
import './MapContainer.css';

const MapContainer = ({ currentMarkerType }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8rDrxBzMRlgbA7BQ2DoY31gEXzZ4Ours&libraries=places&language=zh-HK&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      // Initialize your map here using the existing initMap logic
      // For example:
      // const map = new google.maps.Map(mapRef.current, { ... });
    }

    return () => {
      // Cleanup if necessary
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    // Handle toggle between Cars and Stations
    if (currentMarkerType === 'Cars') {
      // Show car markers
    } else if (currentMarkerType === 'Stations') {
      // Show station markers
    }
  }, [currentMarkerType]);

  return (
    <div className="map-container">
      <button className="locate-button" id="locateButton" title="Center on Me">
        <img src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" alt="Locate" />
      </button>
      <div id="map" ref={mapRef}></div>
    </div>
  );
};

export default MapContainer;
