import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { cookies, headers } = request;
  const { redirect } = NextResponse;

  const Authorization =
    cookies.get('Authorization')?.value || headers.get('Authorization');

  /**
   * DASHBOARD ROUTES
   */
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // If theres is no token, redirect the user to login
    if (!Authorization) return redirect(new URL('/', request.url));
  }

  /**
   * AUTH ROUTES
   */
  const authRoutes = ['/'];
  if (authRoutes.includes(request.nextUrl.pathname)) {
    // If has token redirect to Dashboard
    if (Authorization) return redirect(new URL('/dashboard', request.url));
  }
}
