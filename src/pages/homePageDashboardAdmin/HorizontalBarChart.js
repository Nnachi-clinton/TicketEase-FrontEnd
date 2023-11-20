import { Bar } from "react-chartjs-2";
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
  const chartData = {
    labels: ["Total Boards", "Total Projects", "Total Tickets"],
    datasets: [
      {
        label: "Tracker",
        data: [68, 445, 565],
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
