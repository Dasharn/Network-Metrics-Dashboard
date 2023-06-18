import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPMetric from './IPMetric'; // Import the IPMetric component

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Networking Metrics">
        <IPMetric type="IPv4" />
        <IPMetric type="IPv6" />
      </Exhibit>
    </div>
  );
}

export default App;
