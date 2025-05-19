'use client';

import { useState, useEffect } from 'react';

const transactions = [
  {
    id: 101,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 102,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 103,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 104,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 105,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 106,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 107,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 108,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 109,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 110,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 111,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 112,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 999900,
    status: 'Failed',
  },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Failed: 'bg-red-100 text-red-800',
};

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Transactions</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Transaction</th>
              <th className="px-4 py-3 text-right">Amount (UGX)</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={txn.user.avatar}
                    alt={txn.user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{txn.user.name}</span>
                </td>
                <td className="px-4 py-3">{txn.date}</td>
                <td className="px-4 py-3">{txn.time}</td>
                <td className="px-4 py-3">{txn.code}</td>
                <td className="px-4 py-3 text-right">
                  {txn.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[txn.status]}`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
