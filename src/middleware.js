import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/newsletter')) {
    return NextResponse.rewrite('https://codersk36.hashnode.dev/api/newsletter/subscribe');
  }
}
