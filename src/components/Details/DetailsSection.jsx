import React, { useState, useEffect } from 'react';
import './DetailsSection.css';

const DetailsSection = ({
  selectedVehicle,
  onLock,
  onUnlock,
  onChooseDestination,
  onPayAsYouGo,
  walkingTime,
  routeDetails,
  showRouteDetails,
  toggleRouteDetails,
  lastKnownLocation,
}) => {
  if (!selectedVehicle) {
    return (
      <div className="details-section">
        <div className="details-container">
          <div className="items-list">
            <ul id="vehicleDetails">
              <li>Select a vehicle to see details here...</li>
            </ul>
          </div>
          <div className="right-container">
            <button
              id="chooseDestinationButton"
              className="choose-destination-btn"
              disabled
            >
              Choose Destination
            </button>
            <button
              id="payAsYouGoButton"
              className="pay-as-you-go-btn"
              disabled
            >
              Pay-As-You-Go
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-section">
      <div className="details-container">
        <div className="items-list">
          <ul id="vehicleDetails">
            <li><strong>Registration:</strong> {selectedVehicle.registration}</li>
            <li><strong>Model:</strong> {selectedVehicle.model}</li>
            <li><strong>Status:</strong> {selectedVehicle.systemStatus ? 'Active' : 'Inactive'}</li>
            <li><strong>Battery Level:</strong> {selectedVehicle.batteryLevel}%</li>
            <li><strong>Door Status:</strong> {selectedVehicle.doorStatus}</li>
            <li><strong>Last Active:</strong> {selectedVehicle.lastActiveTime}</li>
          </ul>
          {walkingTime && (
            <div className="route-info" id="routeInfo">
              <span className="time">{walkingTime.value}</span>
              <span className="unit">{walkingTime.unit}</span>
            </div>
          )}
          {routeDetails && (
            <>
              <div className="route-details-toggle" id="routeToggle" onClick={toggleRouteDetails}>
                <span id="toggleText">
                  {showRouteDetails ? 'Close route details' : 'Route details'}
                </span>
              </div>
              {showRouteDetails && (
                <div className="route-details" id="routeDetails">
                  {routeDetails.map((step, index) => (
                    <div key={index}>
                      <strong>Step {index + 1}:</strong> <span dangerouslySetInnerHTML={{ __html: step.instructions }} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          <div className="button-group" style={{ display: 'flex' }}>
            <button
              id="lockButton"
              className="lock-btn"
              onClick={() => onLock(selectedVehicle.registration)}
            >
              Lock
            </button>
            <button
              id="unlockButton"
              className="unlock-btn"
              onClick={() => onUnlock(selectedVehicle.registration)}
            >
              Unlock
            </button>
          </div>
        </div>
        <div className="right-container">
          <button
            id="chooseDestinationButton"
            className="choose-destination-btn"
            onClick={onChooseDestination}
          >
            Choose Destination
          </button>
          <button
            id="payAsYouGoButton"
            className="pay-as-you-go-btn"
            onClick={onPayAsYouGo}
          >
            Pay-As-You-Go
          </button>
        </div>
      </div>
      {lastKnownLocation && (
        <div className="last-location" id="lastLocation">
          <strong>Last Known Location:</strong>
          <div className="address">
            <span className="english">{lastKnownLocation.english}</span>
            <span className="chinese">{lastKnownLocation.chinese}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsSection;
