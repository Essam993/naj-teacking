import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components to avoid errors
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeDelayChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Time Delay (in hours)', // Label for the dataset
        data: [2, 3, 1.5, 4, 2.5, 3, 2], // Example time delay data for each month
        backgroundColor: [
          '#013188a8', // Primary color (Bootstrap blue)
          'rgba(0, 255, 0, 0.5)',  // Green color
          '#013188a8', // Primary color (Bootstrap blue)
          'rgba(0, 255, 0, 0.5)',   // Green color
          '#013188a8', // Primary color (Bootstrap blue)
          'rgba(0, 255, 0, 0.5)',   // Green color
          '#013188a8', // Primary color (Bootstrap blue)
        ],
        borderColor: [
          '#013188a8', // Primary color (Bootstrap blue)
          'rgb(0, 255, 0)',   // Green color
          '#013188a8', // Primary color (Bootstrap blue)
          'rgb(0, 255, 0)',   // Green color
          '#013188a8', // Primary color (Bootstrap blue)
          'rgb(0, 255, 0)',   // Green color
          '#013188a8', // Primary color (Bootstrap blue)
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
        text: 'Time Delay per Month', // Title text
        align: 'left', // Align title to the left
        font: {
          weight: 'bold',
          color: 'black', // Make the title bold
          size: 22, // Font size similar to h3 (adjust as needed)
        },
      },
    },
  };

  return <Bar data={data} options={options as any} />;
};

export default TimeDelayChart;
