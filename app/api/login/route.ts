// ===== Step 1: API Mock =====
// /app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Fake login logic
  if (email === 'admin@sacco.com' && password === 'password123') {
    return NextResponse.json({
      id: '1',
      name: 'Admin User',
      email,
      role: 'admin',
      token: 'fake-jwt-token-admin'
    });
  }

  if (email === 'member@sacco.com' && password === 'password123') {
    return NextResponse.json({
      id: '2',
      name: 'Member User',
      email,
      role: 'member',
      token: 'fake-jwt-token-member'
    });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}