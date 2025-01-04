import React, { useState, useEffect } from 'react';
import { Col, Row, Typography, Progress } from 'antd';
import { CaretUpOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const DeliveryTimeSection = () => {
  const [averageTime, setAverageTime] = useState(5400); // Default average time in seconds (1.5 hours)
  const [fasterPercentage, setFasterPercentage] = useState(0);

  // Convert average time to hours, minutes, and seconds
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  // Simulating the update of the faster percentage (could be fetched from an API)
  useEffect(() => {
    // Example logic: set a random percentage to simulate how much faster the deliveries are
    const randomPercentage = Math.floor(Math.random() * 100);
    setFasterPercentage(randomPercentage);
  }, []);


  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
          <Title level={3} style={{ color: '#6b6b6b', fontWeight: 'bold' }}>Average Delivery Time</Title>
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>
            <ClockCircleOutlined style={{ marginRight: '10px' }} />
            {formatTime(averageTime)}
          </div>
          <Progress
            percent={(averageTime / 7200) * 100} // Assuming 7200 seconds (2 hours) is the goal for delivery time
            status="active"
            strokeColor="#4caf50"
            style={{ marginBottom: '20px' }}
          />

          <Typography style={{ color: 'green' }}><CaretUpOutlined /> Percentage of Being Faster than Last 7 Days</Typography>
    </div>
  );
};

export default DeliveryTimeSection;
