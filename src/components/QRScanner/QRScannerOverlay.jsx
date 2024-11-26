import React, { useEffect } from 'react';
import './QRScannerOverlay.css';
import { Html5Qrcode } from 'html5-qrcode';

const QRScannerOverlay = ({ isOpen, onClose }) => {
  useEffect(() => {
    let html5QrCode;

    if (isOpen) {
      html5QrCode = new Html5Qrcode("qr-reader");

      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // Handle the scanned QR code data
        alert(`QR Code Scanned: ${decodedText}`);
        onClose();
      };

      const config = { fps: 10, qrbox: 250 };

      html5QrCode.start(
        { facingMode: "environment" },
        config,
        qrCodeSuccessCallback
      ).catch(err => {
        console.error(`Unable to start scanning, error: ${err}`);
      });
    }

    return () => {
      if (html5QrCode) {
        html5QrCode.stop().then(() => {
          html5QrCode.clear();
        }).catch(err => {
          console.error('Failed to stop QR scanner:', err);
        });
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="qr-scanner-overlay">
      <div className="qr-scanner-container">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div id="qr-reader"></div>
      </div>
    </div>
  );
};

export default QRScannerOverlay;
