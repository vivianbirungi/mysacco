'use client';

import { useContext } from 'react';
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { statusColors, transactions } from '@/lib/data';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import BalanceCard from '@/components/BalanceCard';
import BarChart from '@/components/Barchart';
import QuickLinks from '@/components/admin/QuickLinks';

export default function AdminDashboardPage() {
  // const { user } = useContext(useAuth);
  const loggedIn = {firstName : 'vivian', lastName :'Birungi', email:'vivi@gmail.com'}
  const router = useRouter();

  // useEffect(() => {
  //   if (!user || user.role !== 'admin') {
  //     router.push('/unauthorized');
  //   }
  // }, [user, router]);

  // if (!user || user.role !== 'admin') return null;

  return (
   <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <div className="flex gap-6 mb-6">
            <BalanceCard title="Balance" amount="3,000,000 UGX"/>
            <BalanceCard title="Total Contributions" amount="1,250,000 UGX"/>
            <BalanceCard title="Total Shares" amount="500,000 UGX"/>
            <BalanceCard title="Total Shares" amount="500,000 UGX"/>
          </div>
        </header>
        <QuickLinks />
        <div className='flex gap-4'>
          <BarChart/>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Member Jane submitted a loan application</li>
              <li>Admin approved share purchase for Member John</li>
              <li>System generated monthly interest statement</li>
            </ul>
          </div>
        </div>
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
              {transactions.slice(5).map((txn) => (
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

       
       
        </div>
      </div>
      
    </section>
  );
}
