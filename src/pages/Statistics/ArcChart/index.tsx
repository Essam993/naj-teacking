import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Select, Row, Col } from 'antd';

const { Option } = Select;

// Register Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Mocked driver and delivery data
const deliveries = [
  { driver: 'John Doe', onTime: 75, late: 25 },
  { driver: 'Jane Smith', onTime: 50, late: 50 },
  { driver: 'Mike Johnson', onTime: 90, late: 10 },
];

// Extract unique drivers
const drivers = Array.from(new Set(deliveries.map((d) => d.driver)));

const ArcChart = () => {
  const [selectedDriver, setSelectedDriver] = useState<string>('All');

  // Filter data by selected driver
  const filteredData =
    selectedDriver === 'All'
      ? { onTime: deliveries.reduce((acc, d) => acc + d.onTime, 0) / deliveries.length, late: deliveries.reduce((acc, d) => acc + d.late, 0) / deliveries.length }
      : deliveries.find((d) => d.driver === selectedDriver) || { onTime: 0, late: 0 };

  const data = {
    labels: ['On-Time Delivery', 'Late Delivery'],
    datasets: [
      {
        label: `Delivery Status for ${selectedDriver}`,
        data: [filteredData.onTime, filteredData.late],
        backgroundColor: ['#013188', '#f44336'],
        borderColor: ['#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `On-Time Delivery Rate (${selectedDriver})`,
        align: 'left',
        font: {
          weight: 'bold',
          size: 22,
        },
        color: 'black',
      },
    },
  };

  return (
    <div>
      <Row style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Select
            defaultValue="All"
            onChange={(value) => setSelectedDriver(value)}
            style={{ width: '350px' }}
          >
            <Option value="All">All Drivers</Option>
            {drivers.map((driver) => (
              <Option key={driver} value={driver}>
                {driver}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Doughnut data={data} options={options as any} />
    </div>
  );
};

export default ArcChart;
