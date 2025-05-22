'use client';

import { useState } from 'react';
// import api from '@/lib/api';
// import { useAuthContext } from '@/context/AuthContext';
import { statusColors } from '@/lib/data';
import { Member } from '@/types/member';
import { Button } from '@/components/ui/button';
export const membersData: Member[] = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Okello',
    email: 'john.okello@example.com',
    phone: '+256700000001',
    gender: 'male',
    date_of_birth: '1990-06-15',
    joined_date: '2022-01-10',
    membership_number: 'SACCO-0001',
    photo_url: '/icons/avatar1.png',
    savings_balance: 1250000,
    shares_owned: 10,
    total_contributions: 3000000,
    status: 'active',
  },
  {
    id: 2,
    first_name: 'Grace',
    last_name: 'Nabunya',
    email: 'grace.nabunya@example.com',
    phone: '+256772345678',
    gender: 'female',
    date_of_birth: '1987-04-22',
    joined_date: '2021-08-05',
    membership_number: 'SACCO-0002',
    photo_url: '/icons/avatar2.png',
    savings_balance: 950000,
    shares_owned: 5,
    total_contributions: 2100000,
    status: 'active',
  },
  {
    id: 3,
    first_name: 'Samuel',
    last_name: 'Kato',
    email: 'samuel.kato@example.com',
    phone: '+256701112233',
    gender: 'male',
    date_of_birth: '1995-12-01',
    joined_date: '2023-03-12',
    membership_number: 'SACCO-0003',
    photo_url: '/icons/avatar1.png',
    savings_balance: 450000,
    shares_owned: 2,
    total_contributions: 800000,
    status: 'inactive',
  }
];

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  // const { token } = useAuthContext();

  // useEffect(() => {
    // if (!token) return;

    // const fetchMembers = async () => {
    //   try {
    //     const res = await api.get('/members', {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setMembers(res.data);
    //   } catch (error) {
    //     console.error('Failed to fetch members', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchMembers();
  // }, [token]);

  if (loading) return <p>Loading members...</p>;

  return (
    // <div className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">Members</h1>
    //   <table className="min-w-full border">
    //     <thead>
    //       <tr>
    //         <th className="border px-4 py-2">ID</th>
    //         <th className="border px-4 py-2">Name</th>
    //         <th className="border px-4 py-2">Email</th>
    //         <th className="border px-4 py-2">Phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {members.map((member) => (
    //         <tr key={member.id}>
    //           <td className="border px-4 py-2">{member.id}</td>
    //           <td className="border px-4 py-2">{member.name}</td>
    //           <td className="border px-4 py-2">{member.email}</td>
    //           <td className="border px-4 py-2">{member.phone}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <main className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-6">Members</h1>
        <Button variant="outline" className='text-[#016367]'><img src ="icons/plus.svg" />Add member</Button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Membership Number</th>
              <th className="px-4 py-3 text-right">Total Contributions (UGX)</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {membersData.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={member?.photo_url}
                    alt={member?.first_name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{member?.first_name} {member?.first_name}</span>
                </td>
                <td className="px-4 py-3">{member?.email}</td>
                <td className="px-4 py-3">{member?.phone}</td>
                <td className="px-4 py-3">{member?.membership_number}</td>
                <td className="px-4 py-3 text-right">
                  {member?.total_contributions.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[member?.status]}`}
                  >
                    {member?.status}
                  </span>
                </td>
                <td className="flex px-4 py-3">
                  <img src={'/icons/edit.svg'}/>
                  <img src={'/icons/trash.png'} width={15} height={5}/> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        
      </div>
    </main>
  );
}
