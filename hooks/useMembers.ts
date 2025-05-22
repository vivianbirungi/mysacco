// hooks/useMembers.ts
import { useEffect, useState } from 'react';
import { Member } from '@/types/member';
import { fetchMembers } from '@/lib/api';

export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    fetchMembers()
      .then(setMembers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { members, loading, error };
}
