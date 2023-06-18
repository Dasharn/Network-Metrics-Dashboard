import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPMetric from './IPMetric'; // Import the IPMetric component

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Networking Metrics"> {/* Update the title */}
        <IPMetric /> {/* Include the IPMetric component */}
        {/* Include additional Metric components for other data points */}
      </Exhibit>
    </div>
  );
}

export default App;
