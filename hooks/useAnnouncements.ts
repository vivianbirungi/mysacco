import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { Announcement } from '../types/announcement';
import axios from 'axios';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get('/api/announcements');
      setAnnouncements(res.data);
    } finally {
      setLoading(false);
    }
  };

  const postAnnouncement = async (data: Omit<Announcement, 'id' | 'created_at'>) => {
    const res = await axios.post('/announcements', data);
    setAnnouncements([res.data, ...announcements]);
  };

  const updateAnnouncement = async (id: number, data: Partial<Announcement>) => {
    const res = await axios.put(`/announcements/${id}`, data);
    setAnnouncements((prev) =>
      prev.map((a) => (a.id === id ? res.data : a))
    );
  };

  const deleteAnnouncement = async (id: number) => {
    await api.delete(`/announcements/${id}`);
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  return {
    announcements,
    loading,
    postAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  };
}
