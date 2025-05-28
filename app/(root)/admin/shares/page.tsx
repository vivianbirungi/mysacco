// app/admin/shares/page.tsx
'use client';

import { getSharesData, SharesData } from '@/hooks/useShares';
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
import { useEffect, useState } from 'react';
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

export default function AdminSharesPage() {
  const [data, setData] = useState<SharesData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSharesData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <div className="p-6">Loading...</div>;

  const chartData = {
    labels: data.shares.map(s => s.date_purchased),
    datasets: [
      {
        label: 'Share Value',
        data: data.shares.map(s => s.value),
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14,165,233,0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Shares Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Shares" value={data.total_shares} />
        <Card title="Share Value" value={`${data.share_value.toLocaleString()} UGX`} />
        <Card title="Total Investment" value={`${data.total_investment.toLocaleString()} UGX`} />
        <Card title="Dividends Received" value={`${data.dividends_received.toLocaleString()} UGX`} />
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Share Value Trend</h2>
        <Line data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
