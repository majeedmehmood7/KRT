import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const ReactSpeedometerComponent = () => {
  const [speed1] = useState(10); // Set your desired values here
  const [speed2] = useState(45);
  const [speed3] = useState(90);

  const segmentColors = ['#b3e0f5', '#4da6ff', '#0074e0', '#003566']; // Light blue shades

  const speedometerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px', // Margin between speedometers
    marginLeft: '30px', // Margin from left
  };

  const speedometerStyle = {
    width: '300px', // Adjust the width for larger speedometers
  };

  return (
    <div>
      <h2 style={{ marginLeft: '20px' }}>Speed O Meter Progress Bar</h2>
      <div style={speedometerContainerStyle}>
        <div style={speedometerStyle}>
          <h3 style={{ textAlign: 'center' }}>Layout</h3>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={speed1}
            needleTransition={true} // Enable needle transition animation
            needleTransitionDuration={1000} // Duration of the animation in milliseconds
            segmentColors={segmentColors}
            needleColor="steelblue"
          />
        </div>
        <div style={speedometerStyle}>
          <h3 style={{ textAlign: 'center' }}>Excavation</h3>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={speed2}
            needleTransition={true}
            needleTransitionDuration={1000}
            segmentColors={segmentColors}
            needleColor="steelblue"
          />
        </div>
        <div style={speedometerStyle}>
          <h3 style={{ textAlign: 'center' }}>Stone Blast</h3>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={speed3}
            needleTransition={true}
            needleTransitionDuration={1000}
            segmentColors={segmentColors}
            needleColor="steelblue"
          />
        </div>
      </div>
    </div>
  );
};

export default ReactSpeedometerComponent;
