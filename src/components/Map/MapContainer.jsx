// src/components/Map/MapContainer.jsx

import React, { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import './MapContainer.css';

// Import ArcGIS CSS
import '@arcgis/core/assets/esri/themes/light/main.css';

const MapContainer = ({ onMapViewLoad }) => {
  const mapRef = useRef();

  useEffect(() => {
    let view;

    const initializeMap = async () => {
      const map = new Map({
        basemap: 'streets-navigation-vector',
      });

      view = new MapView({
        container: mapRef.current,
        map: map,
        center: [/* longitude */, /* latitude */], // Replace with initial center coordinates
        zoom: 6, // Initial zoom level; adjust as needed
      });

      await view.when();

      // Notify parent component that MapView is loaded
      if (onMapViewLoad) {
        onMapViewLoad(view);
      }

      // Set the extent to the country level
      view.extent = {
        xmin: -130, // Example min longitude
        ymin: 24,    // Example min latitude
        xmax: -60,   // Example max longitude
        ymax: 50,    // Example max latitude
        spatialReference: { wkid: 4326 },
      };

      // Add car locations layer
      const carLayer = new FeatureLayer({
        url: 'https://your-cartrack-api-endpoint.com/car-locations', // Replace with your actual API endpoint
        outFields: ['*'],
        popupTemplate: {
          title: 'Car Location',
          content: 'Car ID: {car_id}<br>Location: {location}',
        },
        // Enable clustering
        featureReduction: {
          type: 'cluster',
          clusterRadius: '100px',
          popupTemplate: {
            title: 'Cluster Summary',
            content: 'You have {cluster_count} cars in this area.',
          },
        },
      });

      map.add(carLayer);

      // Handle cluster click to zoom into neighborhood level
      view.on('click', async (event) => {
        const response = await view.hitTest(event);
        const results = response.results.filter(
          (result) => result.graphic.layer === carLayer
        );

        if (results.length > 0) {
          const graphic = results[0].graphic;

          if (graphic.attributes.cluster_count) {
            // It's a cluster
            const centroid = graphic.geometry.centroid;
            view.goTo({
              center: centroid,
              zoom: view.zoom + 2, // Adjust zoom level as needed
            });
          } else {
            // It's an individual feature
            // Optionally, open a popup or perform other actions
            view.popup.open({
              title: graphic.attributes.car_id,
              content: graphic.attributes.location,
              location: graphic.geometry,
            });
          }
        }
      });
    };

    initializeMap();

    // Cleanup on unmount
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [onMapViewLoad]);

  return <div className="map-container" ref={mapRef}></div>;
};

export default MapContainer;
