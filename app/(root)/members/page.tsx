'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useAuthContext } from '@/context/AuthContext';

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  // add other fields as needed
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) return;

    const fetchMembers = async () => {
      try {
        const res = await api.get('/members', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMembers(res.data);
      } catch (error) {
        console.error('Failed to fetch members', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [token]);

  if (loading) return <p>Loading members...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Members</h1>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border px-4 py-2">{member.id}</td>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">{member.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
