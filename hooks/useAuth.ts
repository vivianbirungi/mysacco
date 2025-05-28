// hooks/useAuth.ts
'use client';
import { useState } from 'react';
import {api} from '@/lib/api';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/api/login', { email, password });
      const { token, user } = response.data;

      // Store token in localStorage or cookies
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      //cookies
    //    Cookies.set('user', JSON.stringify(userData));
    // Cookies.set('role', userData.role); // for middleware

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return { login, logout, loading, error };
};
