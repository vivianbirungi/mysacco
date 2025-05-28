'use client';

import AnnouncementForm from '@/components/admin/AnnouncementForm';
import AnnouncementList from '@/components/admin/AnnouncementList';
import { useAnnouncements } from '@/hooks/useAnnouncements';

export default function AnnouncementsPage() {
  const {
    announcements,
    loading,
    postAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  } = useAnnouncements();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Announcements</h1>

      <AnnouncementForm onPost={postAnnouncement} />

      {loading ? (
        <p>Loading announcements...</p>
      ) : (
        <AnnouncementList
          announcements={announcements}
          onUpdate={updateAnnouncement}
          onDelete={deleteAnnouncement}
        />
      )}
    </main>
  );
}
