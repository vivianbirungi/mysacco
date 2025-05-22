"use client"
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: { display: true },
      grid: { display: false },
       barPercentage: 0.4
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Monthly Contributions (UGX)",
      font: {
        size: 16,
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sept","Nov","Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: "Contributions",
      data: [300000, 500000, 400000, 250000, 350000, 450000, 500000, 29049,100000,30000,11000, 234098],
      backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500/70
      borderRadius: 2,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
