// Example in Header.jsx
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const { currentMarkerType, setCurrentMarkerType } = useContext(AppContext);

  const handleToggle = (type) => {
    setCurrentMarkerType(type);
  };

  return (
    <header>
      <div className="toggle-container">
        <div className="toggle-base"></div>
        <button
          className={`toggle-button ${currentMarkerType === 'Cars' ? 'active' : ''}`}
          onClick={() => handleToggle('Cars')}
        >
          Cars
        </button>
        <button
          className={`toggle-button ${currentMarkerType === 'Stations' ? 'active' : ''}`}
          onClick={() => handleToggle('Stations')}
        >
          Stations
        </button>
      </div>
    </header>
  );
};

export default Header;
