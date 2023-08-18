import React from 'react';
import './SemiCircleProgressBar.css';

const SemiCircleProgressBar = ({ progress }) => {
  return (
    <div className="semi-circle-container">
      <div className="semi-circle-progress" style={{ transform: `rotate(${progress * 180}deg)` }}></div>
    </div>
  );
};

export default SemiCircleProgressBar;
