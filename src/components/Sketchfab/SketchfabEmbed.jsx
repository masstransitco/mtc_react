import React, { useEffect } from 'react';
import './SketchfabEmbed.css';

const SketchfabEmbed = () => {
  useEffect(() => {
    // Initialize Sketchfab API here
    // You can move the existing initializeSketchfab function logic into here
    // For example:
    // initializeSketchfab();
  }, []);

  return (
    <div className="sketchfab-embed-wrapper" id="sketchfabContainer">
      <iframe
        src="https://sketchfab.com/models/32182bd458674ea6969f8890ada5883f/embed?autostart=1&ui_watermark=0&ui_infos=0&ui_stop=0&ui_annotations=0"
        title="3D Model"
      ></iframe>
    </div>
  );
};

export default SketchfabEmbed;
