import React, { useEffect, useState } from 'react';
import WebSocket from 'websocket';

const LatencyMetric = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const client = new WebSocket.client();
    const wsUrl = 'ws://localhost:55455'; // Update with the correct WebSocket endpoint provided by Pylon

    client.on('connectFailed', error => {
      console.error('WebSocket connection error:', error);
    });

    client.on('connect', connection => {
      console.log('WebSocket connection established');

      connection.on('message', message => {
        if (message.type === 'utf8') {
          const data = JSON.parse(message.utf8Data);
          const packetTimestamp = data.timestamp;
          const currentTimestamp = Date.now();
          const packetLatency = currentTimestamp - packetTimestamp;

          setLatency(packetLatency);
        }
      });

      connection.on('close', () => {
        console.log('WebSocket connection closed');
      });
    });

    client.connect(wsUrl);

    return () => {
      client.abort();
    };
  }, []);

  return (
    <div className="metric">
      <h3>Packet Latency:</h3>
      <p>{latency} ms</p>
    </div>
  );
};

export default LatencyMetric;
