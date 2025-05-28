import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bell, UserPlus } from "lucide-react";
import BarChart from "./Barchart";

const RightSidePanel = () => {
  return (
    <aside className='right-sidebar gap-4'>
      {/* Profile Card */}
            <section className='flex flex-col pb-8'>
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-xl font-semibold text-blue-700">
                        V
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Vivian Birungi</h2>
                        <p className="text-sm text-gray-500">vivi@gmail.com</p>
                        <p className="text-xs text-gray-400 mt-1">Member ID: SAC-00123</p>
                        <span className="text-xs text-green-600 font-medium">Status: Active</span>
                    </div>
                </div>
                <div className="mt-4 flex gap-2">
                    <Button size="sm">Add Shares</Button>
                    <Button size="sm" variant="outline">Edit Profile</Button>
                </div>
            </section>
      {/* Digital Member Card */}
     

      {/* Progress or Metrics */}
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-2">Loan Repayment Progress</h3>
        <Progress value={65} />
        <p className="text-xs text-gray-500 mt-2">65% of loan paid</p>
      </Card>

      {/* Notifications */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">Notifications</h3>
          <Bell className="w-4 h-4 text-gray-400" />
        </div>
        <ul className="text-sm space-y-2">
          <li>✅ Contribution received: UGX 250,000</li>
          <li>📅 AGM on June 5, 2025</li>
          <li>⚠️ Loan repayment due in 3 days</li>
        </ul>
      </Card>

      {/* Referral Program */}
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <UserPlus className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-semibold">Invite & Earn</h3>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Invite friends to join the SACCO and earn UGX 10,000 in shares.
        </p>
        <Button className="mt-3" size="sm">Share Invite Link</Button>
      </Card>
       <BarChart/>
    </aside>
  );
};

export default RightSidePanel;
