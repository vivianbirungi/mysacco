'use client';
import { useState } from 'react';

interface Props {
  initialTitle: string;
  initialMessage: string;
  onSave: (data: { title: string; message: string }) => void;
  onCancel: () => void;
}

export default function AnnouncementEditForm({
  initialTitle,
  initialMessage,
  onSave,
  onCancel,
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [message, setMessage] = useState(initialMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, message });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        value={title}
        className="w-full p-1 border mb-1 rounded"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={message}
        className="w-full p-1 border mb-1 rounded"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded">
          Save
        </button>
        <button type="button" onClick={onCancel} className="text-gray-500">
          Cancel
        </button>
      </div>
    </form>
  );
}
