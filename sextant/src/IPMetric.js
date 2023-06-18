import React, { useEffect, useState } from 'react';

const IPMetric = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Fetch the IP address from the API or appropriate source
    // Update the state with the retrieved IP address
    // Example:
    fetch('https://api.example.com/ip')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip));
  }, []);

  return (
    <div className="metric">
      <h3>IP Address:</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPMetric;
