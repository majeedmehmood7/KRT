import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <h1 className="heading">Progress on Different Projects</h1>
    
      <div className="progress-bar-row">
        <div className="progress-bar">
            <div className="text-container">
            <p className="text-above"><b>Layout</b></p>
            <p className="text-below"><b>64</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '10%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">64</p> */}
            <p className="text-below"><b>10%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>Excavation</b></p>
            <p className="text-below"><b>6</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '40%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">6</p> */}
            <p className="text-below"><b>40%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>Stone Blast</b></p>
            <p className="text-below"><b>38</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '20%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">38</p> */}
            <p className="text-below"><b>20%</b></p>
          </div>
        </div>
        
      </div>

      <div className="progress-bar-row">
        <div className="progress-bar">
            <div className="text-container">
            <p className="text-above"><b>Lean</b></p>
            <p className="text-below"><b>62</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '40%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">64</p> */}
            <p className="text-below"><b>40%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>Stone/Brick Masonry</b></p>
            <p className="text-below"><b>34</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '34%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">6</p> */}
            <p className="text-below"><b>34%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>DPC</b></p>
            <p className="text-below"><b>52</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '10%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">38</p> */}
            <p className="text-below"><b>10%</b></p>
          </div>
        </div>
      </div>

      <div className="progress-bar-row">
        <div className="progress-bar">
            <div className="text-container">
            <p className="text-above"><b>Sill Level</b></p>
            <p className="text-below"><b>24</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '88%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">64</p> */}
            <p className="text-below"><b>88%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>Lintel Level</b></p>
            <p className="text-below"><b>6</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '6%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">6</p> */}
            <p className="text-below"><b>6%</b></p>
          </div>
        </div>

        <div className="progress-bar">
        <div className="text-container">
            <p className="text-above"><b>Roof Level</b></p>
            <p className="text-below"><b>6</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '10%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">38</p> */}
            <p className="text-below"><b>6%</b></p>
          </div>
        </div>
      </div>



      <div className="progress-bar-row">
        <div className="progress-bar">
            <div className="text-container">
            <p className="text-above"><b>Roofing</b></p>
            <p className="text-below"><b>16</b></p>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '16%' }}></div>
          </div>
          <div className="text-container">
            {/* <p className="text-above">64</p> */}
            <p className="text-below"><b>16%</b></p>
          </div>
        </div>
 
      </div>

    </div>

  );
};

export default ProgressBar;
