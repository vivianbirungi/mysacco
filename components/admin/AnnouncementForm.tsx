'use client';
import { useState } from 'react';

interface Props {
  onPost: (data: { title: string; message: string }) => void;
}

export default function AnnouncementForm({ onPost }: Props) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message) return;
    onPost({ title, message });
    setTitle('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Post New Announcement</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Message"
        className="w-full mb-2 p-2 border rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
}
