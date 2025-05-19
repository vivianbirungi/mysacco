"use client"
import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const chartData = {
  labels: Array(10).fill(''),
  datasets: [
    {
      data: [52, 54, 53, 57, 55, 60, 58, 56, 59, 56],
      borderColor: '#3b7f4c',
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { display: false },
    y: { display: false }
  },
  elements: {
    line: {
      // ✅ use only 'round', 'bevel', or 'miter'
    }
  }
};


export default function BalanceCard({title, amount,}:any) {
  return (
    <div className="bg-[#004c5f] p-4 rounded-2xl w-60 h-40 relative overflow-hidden">
      <div className="text-white text-sm font-medium flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs ">{title}
          <span className="text-xs">💲</span> 
        </span>
        <span className="bg-green-200 text-xs px-2 py-0.5 rounded-full">
          +17%
        </span>
      </div>

      <div className="text-2xl font-bold mt-2 text-white">{amount}</div>

      <div className="absolute bottom-2 left-0 right-0 h-12 px-2">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
