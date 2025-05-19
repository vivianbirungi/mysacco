'use client';

import { savingsData } from '@/lib/data';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);



export default function Savings() {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(savingsData.contributions.length / itemsPerPage);
  const paginatedContributions = savingsData.contributions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const chartData = savingsData.contributions.map(c => ({
    date: c.date,
    amount: c.amount
  })).reverse();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Savings</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Total Savings</p>
          <h2 className="text-xl font-bold">{savingsData.total_savings.toLocaleString()} UGX</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Savings Balance</p>
          <h2 className="text-xl font-bold">{savingsData.savings_balance.toLocaleString()} UGX</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Monthly Target</p>
          <h2 className="text-xl font-bold">{savingsData.monthly_target.toLocaleString()} UGX</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500 text-sm">Last Contribution</p>
          <h2 className="text-xl font-bold">{savingsData.last_contribution_date}</h2>
        </div>
      </div>

      {/* Status */}
      <div className="mb-6">
        <span className={`px-3 py-1 text-sm rounded-full font-medium ${
          savingsData.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-200 text-gray-600'
        }`}>
          {savingsData.status.toUpperCase()}
        </span>
      </div>

      {/* Savings Chart */}
      {/* Savings Chart */}
        {/* <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Savings Trend</h2>
        <Line
            data={{
            labels: chartData.map(item => item.date),
            datasets: [
                {
                label: 'Savings',
                data: chartData.map(item => item.amount),
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                tension: 0.4,
                fill: true,
                },
            ],
            }}
            options={{
            responsive: true,
            plugins: {
                legend: {
                display: true,
                position: 'top',
                },
            },
            scales: {
                y: {
                beginAtZero: true,
                },
            },
            }}
        />
        </div> */}


      {/* Contributions Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Reference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedContributions.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.amount.toLocaleString()} UGX</td>
                <td className="px-4 py-3">{item.method}</td>
                <td className="px-4 py-3">{item.reference}</td>
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
