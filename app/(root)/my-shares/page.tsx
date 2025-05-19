'use client';

import { useState } from 'react';
import { sharesData } from '@/lib/data';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function SharesPage() {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sharesData.shares.length / itemsPerPage);
  const paginatedShares = sharesData.shares.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const chartData = {
    labels: sharesData.shares.map(s => s.date_purchased),
    datasets: [
      {
        label: 'Share Value',
        data: sharesData.shares.map(s => s.value),
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Shares</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Total Shares</p>
          <h2 className="text-xl font-bold">{sharesData.total_shares}</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Share Value</p>
          <h2 className="text-xl font-bold">{sharesData.share_value.toLocaleString()} UGX</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Total Investment</p>
          <h2 className="text-xl font-bold">{sharesData.total_investment.toLocaleString()} UGX</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Dividends Received</p>
          <h2 className="text-xl font-bold">{sharesData.dividends_received.toLocaleString()} UGX</h2>
        </div>
      </div>

      {/* Shares Chart */}
      {/* <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Share Value Trend</h2>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true } } }} />
      </div> */}

      {/* Shares Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Date Purchased</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedShares.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.date_purchased}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{item.value.toLocaleString()} UGX</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center px-4 py-2 border-t">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
