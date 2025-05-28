// /app/admin/contributions/page.tsx
'use client';

import { useContributions } from '@/hooks/useContributions';
import { ContributionReport } from '@/types/member';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

export default function ContributionsPage() {
  const { data, loading, error } = useContributions();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [methodFilter, setMethodFilter] = useState('');
  const [filteredData, setFilteredData] = useState<ContributionReport[]>([]);


  useEffect(() => {
    let newdata = data;

    if (search) {
      newdata = data.filter(item => item.memberName?.toLowerCase().includes(search.toLowerCase()));
    }

    if (methodFilter) {
      newdata = data.filter(item => item.method === methodFilter);
    }

    setFilteredData(newdata);
  }, [data, search, methodFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginated = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const exportCSV = () => {
    const csv = Papa.unparse(filteredData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'contribution_report.csv');
  };

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by member name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-64"
        />

        <select
          value={methodFilter}
          onChange={(e) => setMethodFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-48"
        >
          <option value="">All Methods</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <button onClick={exportCSV} className="bg-blue-600 text-white px-4 py-2 rounded">
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Member</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Reference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.memberName || '—'}</td>
                <td className="px-4 py-3">{item.amount.toLocaleString()} UGX</td>
                <td className="px-4 py-3">{item.method}</td>
                <td className="px-4 py-3">{item.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-2 border-t">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
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
