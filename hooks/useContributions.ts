import { useEffect, useState } from 'react';
import axios from 'axios';
import { ContributionReport } from '@/types/member';

export const useContributions = () => {
  const [data, setData] = useState<ContributionReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/contributions`);
        setData(res.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return { data, loading, error };
};
