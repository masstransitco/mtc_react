import React from 'react';
import './SelectedInfo.css';

const SelectedInfo = () => {
  return (
    <div className="selected-info-container" id="selectedInfoContainer">
      <h2>Selected Vehicle Information</h2>
      <p>Details about the selected vehicle will be displayed here.</p>
      {/* Additional details can be added here */}
    </div>
  );
};

export default SelectedInfo;
