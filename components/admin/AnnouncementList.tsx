'use client';
import { useState } from 'react';
import { Announcement } from '../../types/announcement';
import AnnouncementEditForm from './AnnouncementEditForm';

interface Props {
  announcements: Announcement[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: { title: string; message: string }) => void;
}

export default function AnnouncementList({
  announcements,
  onDelete,
  onUpdate,
}: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">All Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((a) => (
          <li key={a.id} className="border-b pb-2">
            {editingId === a.id ? (
              <AnnouncementEditForm
                initialTitle={a.title}
                initialMessage={a.message}
                onSave={(data) => {
                  onUpdate(a.id, data);
                  setEditingId(null);
                }}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                <h3 className="font-bold">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.message}</p>
                <span className="text-xs text-gray-400 block">
                  {new Date(a.created_at).toLocaleString()}
                </span>
                <div className="mt-2 flex gap-4 text-sm">
                  <button onClick={() => setEditingId(a.id)} className="text-blue-600">
                    Edit
                  </button>
                  <button onClick={() => onDelete(a.id)} className="text-red-600">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
