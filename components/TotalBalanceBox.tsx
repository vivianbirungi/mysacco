import { Doughnut } from "react-chartjs-2"
import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./Doughnut"
import BalanceCard from "./BalanceCard"

const TotalBalanceBox = ({accounts =[], totalBanks, totalCurrentBalance}:TotalBalanceBoxProps) => {
  return (
   <section className="total-balance">
        {/* <div className="total-balance-chart">
            <DoughnutChart accounts={accounts}/>
        </div> */}
        {/* <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Balance
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter amount={totalCurrentBalance}/>
                    
                </div>
            </div>
        </div> */}
        <div className="flex gap-6 mb-6">
                <BalanceCard title="Balance" amount="3,000,000 UGX"/>
                <BalanceCard title="Total Contributions" amount="1,250,000 UGX"/>
                <BalanceCard title="Total Shares" amount="500,000 UGX"/>
              </div>
   </section>
  )
}

export default TotalBalanceBox