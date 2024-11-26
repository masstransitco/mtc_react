import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import MapContainer from './components/Map/MapContainer';
import SketchfabEmbed from './components/Sketchfab/SketchfabEmbed';
import SelectedInfo from './components/SelectedInfo/SelectedInfo';
import DetailsSection from './components/Details/DetailsSection';
import Footer from './components/Footer/Footer';
import QRScannerOverlay from './components/QRScanner/QRScannerOverlay';
import './App.css'; // Import any global or App-specific styles

const App = () => {
  const [currentMarkerType, setCurrentMarkerType] = useState('Cars');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const [walkingTime, setWalkingTime] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [showRouteDetails, setShowRouteDetails] = useState(false);
  const [lastKnownLocation, setLastKnownLocation] = useState(null);

  // Function to handle vehicle selection
  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    // Fetch additional data if needed, like walking time, route details, last known location
    // Example:
    // fetchRouteDetails(vehicle);
    // fetchLastKnownLocation(vehicle);
  };

  // Function to handle Lock
  const handleLock = async (registration) => {
    // Implement the lock functionality, possibly making an API call
    // Example:
    // await lockVehicle(registration);
    alert(`Lock command sent to vehicle ${registration}.`);
    // Update vehicle status if needed
  };

  // Function to handle Unlock
  const handleUnlock = async (registration) => {
    // Implement the unlock functionality, possibly making an API call
    // Example:
    // await unlockVehicle(registration);
    alert(`Unlock command sent to vehicle ${registration}.`);
    // Update vehicle status if needed
  };

  // Function to open QR Scanner
  const openQrScanner = () => {
    setIsQrScannerOpen(true);
  };

  // Function to close QR Scanner
  const closeQrScanner = () => {
    setIsQrScannerOpen(false);
  };

  // Function to handle QR code scan result
  const handleQrScan = (decodedText) => {
    alert(`QR Code Scanned: ${decodedText}`);
    // Process the decoded text as needed
    closeQrScanner();
  };

  // Function to toggle route details
  const toggleRouteDetails = () => {
    setShowRouteDetails((prev) => !prev);
  };

  // Fetch route details when a vehicle is selected
  useEffect(() => {
    const fetchRouteDetails = async () => {
      if (selectedVehicle && selectedVehicle.location) {
        // Implement API call to fetch route details
        // Example response:
        const mockRouteDetails = [
          { instructions: 'Head north on Main St.' },
          { instructions: 'Turn right onto 1st Ave.' },
          { instructions: 'Your destination will be on the left.' },
        ];
        setRouteDetails(mockRouteDetails);
        setWalkingTime({ value: 5, unit: 'mins' });
      } else {
        setRouteDetails(null);
        setWalkingTime(null);
      }
    };

    fetchRouteDetails();
  }, [selectedVehicle]);

  // Fetch last known location when a vehicle is selected
  useEffect(() => {
    const fetchLastKnownLocation = async () => {
      if (selectedVehicle && selectedVehicle.location) {
        // Implement API call to fetch last known location
        // Example response:
        const mockLastLocation = {
          english: '123 Main St, Hong Kong',
          chinese: '香港主街123號',
        };
        setLastKnownLocation(mockLastLocation);
      } else {
        setLastKnownLocation(null);
      }
    };

    fetchLastKnownLocation();
  }, [selectedVehicle]);

  return (
    <div className="App">
      <Header currentMarkerType={currentMarkerType} setCurrentMarkerType={setCurrentMarkerType} />
      <MapContainer
        currentMarkerType={currentMarkerType}
        onSelectVehicle={handleSelectVehicle}
      />
      <SketchfabEmbed selectedVehicle={selectedVehicle} />
      <SelectedInfo selectedVehicle={selectedVehicle} />
      <DetailsSection
        selectedVehicle={selectedVehicle}
        onLock={handleLock}
        onUnlock={handleUnlock}
        onChooseDestination={openQrScanner}
        onPayAsYouGo={openQrScanner}
        walkingTime={walkingTime}
        routeDetails={routeDetails}
        showRouteDetails={showRouteDetails}
        toggleRouteDetails={toggleRouteDetails}
        lastKnownLocation={lastKnownLocation}
      />
      <Footer />
      <QRScannerOverlay
        isOpen={isQrScannerOpen}
        onClose={closeQrScanner}
        onScan={handleQrScan}
      />
    </div>
  );
};

export default App;
