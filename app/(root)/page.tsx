import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { transactions, statusColors } from "@/lib/data"
const Home = () => {
  const loggedIn = {firstName : 'vivian', lastName :'Birungi', email:'vivi@gmail.com'}
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
          <TotalBalanceBox
            accounts={[]}
            totalBanks ={1}
            totalCurrentBalance={103049063}
          />
        </header>
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
      <RightSidebar 
        user={loggedIn}
        transactions ={[]}
        banks={[{currentBalance:129485},{currentBalance:129485}]}
      />
    </section>
  )
}

export default Home
