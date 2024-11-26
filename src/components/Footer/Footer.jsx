import React from 'react';
import './Footer.css';
import logo from '../../public/logo.png'; // Ensure logo.png is in the public folder

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div className="dropdown-container">
        <select id="vehicleSelector">
          <option value="">-- Select a Vehicle --</option>
          {/* Options will be populated dynamically */}
        </select>
      </div>
      <div className="lock-buttons">
        <button className="lock-btn" id="lockButtonFooter">Lock</button>
        <button className="unlock-btn" id="unlockButtonFooter">Unlock</button>
      </div>
    </footer>
  );
};

export default Footer;
