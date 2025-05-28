import { NextResponse } from 'next/server';
import { Announcement } from '@/types/announcement';

// In-memory storage (replace with DB)
let announcements: Announcement[] = [
  { id: 1, title: 'Welcome', message: 'SACCO opens new branch!', created_at: new Date().toISOString() },
];

export async function GET() {
  return NextResponse.json(announcements);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newAnnouncement: Announcement = {
    id: Date.now(),
    title: body.title,
    message: body.message,
    created_at: new Date().toISOString(),
  };
  announcements.unshift(newAnnouncement);
  return NextResponse.json(newAnnouncement, { status: 201 });
}
