import React from 'react';
import './CircleBar.css';

const CircularProgressBar = ({ progress, title, subtitle }) => {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress">
      <div className="text-top">{title}</div>
      <svg>
        <circle
          className="circle-background"
          cx="50%"
          cy="50%"
          r={radius}
        />
        <circle
          className="circle-progress"
          cx="50%"
          cy="50%"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: offset }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          className="circle-text"
        >
          {progress}%
        </text>
      </svg>
      <div className="text-bottom">{subtitle}</div>
    </div>
  );
};

export default CircularProgressBar;
