// src/components/Scene/SceneContainer.jsx

import React, { useEffect, useRef } from 'react';
import WebScene from '@arcgis/core/WebScene';
import SceneView from '@arcgis/core/views/SceneView';
import './SceneContainer.css';

const SceneContainer = ({ onSceneViewLoad, onCameraChange }) => {
  const sceneRef = useRef();

  useEffect(() => {
    let view;

    const initializeScene = async () => {
      const scene = new Scene({
        portalItem: {
          id: '4304b6c3b2084330b4a2153da9fbbcf0', // Your webscene ID
        },
      });

      view = new SceneView({
        container: sceneRef.current,
        map: scene,
        camera: {
          position: [/* longitude */, /* latitude */, /* elevation */], // Replace with initial camera position
          tilt: 0,
          heading: 0,
        },
        environment: {
          lighting: {
            date: new Date(),
            directShadowsEnabled: true,
            ambientOcclusionEnabled: true,
          },
        },
      });

      await view.when();

      // Notify parent component that SceneView is loaded
      if (onSceneViewLoad) {
        onSceneViewLoad(view);
      }

      // Set the extent to the country level
      view.extent = {
        xmin: -130, // Example min longitude
        ymin: 24,    // Example min latitude
        xmax: -60,   // Example max longitude
        ymax: 50,    // Example max latitude
        spatialReference: { wkid: 4326 },
      };

      // Decrease the FOV to 15 degrees
      view.camera.fov = 15;

      // Listen for camera changes to synchronize with the map
      view.watch('camera', (newCamera) => {
        if (onCameraChange) {
          onCameraChange(newCamera);
        }
      });
    };

    initializeScene();

    // Cleanup on unmount
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [onSceneViewLoad, onCameraChange]);

  return <div className="scene-container" ref={sceneRef}></div>;
};

export default SceneContainer;
