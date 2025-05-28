import { Announcement } from '@/types/announcement';
import { NextResponse } from 'next/server';

let announcements: Announcement[] = [];

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await req.json();

  const index = announcements.findIndex((a) => a.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  announcements[index] = {
    ...announcements[index],
    ...body,
  };

  return NextResponse.json(announcements[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  announcements = announcements.filter((a) => a.id !== id);
  return NextResponse.json({ success: true });
}
