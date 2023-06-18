import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Data Point 1">
        {/* Content for the first data point */}
      </Exhibit>
      <Exhibit title="Data Point 2">
        {/* Content for the second data point */}
      </Exhibit>
    </div>
  );
}

export default App;

