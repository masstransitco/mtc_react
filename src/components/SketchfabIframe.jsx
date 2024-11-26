// src/components/SketchfabIframe.jsx
import React from 'react';

const SketchfabIframe = ({ modelUid, width = '100%', height = '500px' }) => {
  const iframeSrc = `https://sketchfab.com/models/${modelUid}/embed`;

  return (
    <iframe
      title="Sketchfab Model"
      src={iframeSrc}
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; fullscreen; vr"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      style={{ border: 'none' }}
    ></iframe>
  );
};

export default SketchfabIframe;
