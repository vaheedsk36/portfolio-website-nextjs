import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/newsletter')) {
    return NextResponse.rewrite("https://codersk36.hashnode.dev/api/newsletter/subscribe")
  }
}