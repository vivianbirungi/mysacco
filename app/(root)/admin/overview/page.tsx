"use client"
import { Card, CardContent } from "@/components/ui/card";
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

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Contributions vs Loans" },
  },
};

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Contributions",
      data: [500000, 700000, 800000, 750000, 900000, 950000],
      backgroundColor: "#4f46e5",
    },
    {
      label: "Loans Issued",
      data: [200000, 300000, 500000, 400000, 450000, 600000],
      backgroundColor: "#10b981",
    },
  ],
};

export default function FinancialOverviewPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Financial Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Savings</p>
            <h2 className="text-xl font-bold">UGX 120,000,000</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Loans Issued</p>
            <h2 className="text-xl font-bold">UGX 65,000,000</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Shares</p>
            <h2 className="text-xl font-bold">UGX 25,000,000</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Available Balance</p>
            <h2 className="text-xl font-bold">UGX 30,000,000</h2>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <Bar data={barData} options={barOptions} />
      </div>
    </main>
  );
}
