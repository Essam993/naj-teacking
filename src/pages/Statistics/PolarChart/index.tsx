import React, { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
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
ChartJS.register(
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Mocked driver and delivery data
const deliveries = [
  { month: 'January', driver: 'John Doe', deliveries: 150 },
  { month: 'February', driver: 'John Doe', deliveries: 200 },
  { month: 'March', driver: 'Jane Smith', deliveries: 450 },
  { month: 'April', driver: 'Jane Smith', deliveries: 150 },
  { month: 'May', driver: 'Mike Johnson', deliveries: 266 },
  { month: 'June', driver: 'Mike Johnson', deliveries: 180 },
  { month: 'July', driver: 'Jane Smith', deliveries: 340 },
];

// List of unique drivers
const drivers = Array.from(new Set(deliveries.map((d) => d.driver)));
const PolarChart = () => {
  const [selectedDriver, setSelectedDriver] = useState<string>('All');

  // Filter deliveries based on the selected driver
  const filteredDeliveries = selectedDriver === 'All'
    ? deliveries
    : deliveries.filter((d) => d.driver === selectedDriver);

  // Prepare chart data
  const chartData = {
    labels: filteredDeliveries.map((d) => d.month),
    datasets: [
      {
        label: `Deliveries by ${selectedDriver}`,
        data: filteredDeliveries.map((d) => d.deliveries),
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 159, 64)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Total Delivery Rate (${selectedDriver})`,
        align: 'left',
        font: {
          weight: 'bold',
          size: 22,
        },
        color: 'black',
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
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
      <PolarArea data={chartData} options={options as any} />
    </div>
  );
};

export default PolarChart;
