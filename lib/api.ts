// lib/api.ts
import axios from 'axios';
import { Member } from '@/types/member';
export const api = axios.create({
  baseURL: 'https://your-backend.com/api', // <-- replace with your actual API
  headers: {
    'Content-Type': 'application/json',
  },
});
export const fetchMembers = async (): Promise<Member[]> => {
  const response = await axios.get('/api/members');
  return response.data;
};

export const fetchMemberById = async (id: string): Promise<Member> => {
  const response = await axios.get(`/api/members/${id}`);
  return response.data;
};

