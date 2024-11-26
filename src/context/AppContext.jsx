// src/context/AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentMarkerType, setCurrentMarkerType] = useState('Cars');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const [walkingTime, setWalkingTime] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [showRouteDetails, setShowRouteDetails] = useState(false);
  const [lastKnownLocation, setLastKnownLocation] = useState(null);

  return (
    <AppContext.Provider
      value={{
        currentMarkerType,
        setCurrentMarkerType,
        selectedVehicle,
        setSelectedVehicle,
        isQrScannerOpen,
        setIsQrScannerOpen,
        walkingTime,
        setWalkingTime,
        routeDetails,
        setRouteDetails,
        showRouteDetails,
        setShowRouteDetails,
        lastKnownLocation,
        setLastKnownLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
