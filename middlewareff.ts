import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // You could decode token here if it's JWT, or check session
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  const url = new URL(request.url);

  // Optional: Add role-based redirects
  const userRole = getUserRoleFromToken(token); // mock this for now

  if (url.pathname === '/dashboard') {
    if (userRole === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } else {
      return NextResponse.redirect(new URL('/member/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

// Dummy function for demonstration
function getUserRoleFromToken(token: string): 'admin' | 'member' {
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.role;
}
