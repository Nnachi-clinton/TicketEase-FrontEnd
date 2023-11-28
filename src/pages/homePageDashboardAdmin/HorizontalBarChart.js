import { Bar } from "react-chartjs-2";import React,{useState, useEffect} from 'react';

import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const HorizontalBarChart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://localhost:7075/api/TotalCount/GetTotalCounts';

    // Make a GET request to the API
    fetch(apiUrl)
      .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        // Update the state with the retrieved data
        setData(resultData);
        console.log(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  const ticket = data[0];
  const board = data[1];
  const project = data[2];
  

  const chartData = {
    labels: ["Total Boards", "Total Projects", "Total Tickets"],
    datasets: [
      {
        label: "Tracker",
        data: [ticket, board, project],
        backgroundColor: ["#F7C450", "#14A800", "#14A800"],
        tension: 0.1,
        borderWidth: 4,
        datalabels: {
          display: true,
          anchor: "end",
          align: "end",
          formatter: (value, context) => value + " activities",
        },
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    plugins: {
      // legend: {
      //   display: false,
      // },
      datalabels: {
        color: "black", 
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
      },
    },
    responsive: true, 
    maintainAspectRatio: false,
  };





  return (
    <div className="bar-options">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default HorizontalBarChart;
