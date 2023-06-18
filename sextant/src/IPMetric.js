import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IPMetric = ({ type }) => {
  const [ipAddress, setIPAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org?format=json${type === 'IPv6' ? '&ipv6=true' : ''}`);
        const { ip } = response.data;
        setIPAddress(ip);
        setLoading(false);
      } catch (error) {
        setError('Error retrieving IP address');
        setLoading(false);
      }
    };

    fetchIPAddress();
  }, [type]);

  return (
    <div className="metric">
      <h3>{type} Address:</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{ipAddress}</p>
      )}
    </div>
  );
};

export default IPMetric;

