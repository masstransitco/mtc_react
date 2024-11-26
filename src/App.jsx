// src/App.jsx

import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import MapContainer from './components/Map/MapContainer';
import SceneContainer from './components/Scene/SceneContainer';
import './app.css';

function App() {
  const mapViewRef = useRef(null);
  const sceneViewRef = useRef(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Function to handle camera changes from the Map
  const handleMapCameraChange = (newCamera) => {
    if (isSyncing) return;
    setIsSyncing(true);
    if (sceneViewRef.current) {
      sceneViewRef.current.goTo(newCamera).then(() => {
        setIsSyncing(false);
      });
    } else {
      setIsSyncing(false);
    }
  };

  // Function to handle camera changes from the Scene
  const handleSceneCameraChange = (newCamera) => {
    if (isSyncing) return;
    setIsSyncing(true);
    if (mapViewRef.current) {
      mapViewRef.current.goTo(newCamera).then(() => {
        setIsSyncing(false);
      });
    } else {
      setIsSyncing(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <MapContainer
                onMapViewLoad={(mapView) => {
                  mapViewRef.current = mapView;
                  // Listen for camera changes
                  mapView.watch('camera', handleMapCameraChange);
                }}
              />
              <SceneContainer
                onSceneViewLoad={(sceneView) => {
                  sceneViewRef.current = sceneView;
                  // Listen for camera changes
                  sceneView.watch('camera', handleSceneCameraChange);
                }}
                onCameraChange={handleSceneCameraChange}
              />
            </Home>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
