import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const token = request.cookies.get(secret)

  const { pathname } = request.nextUrl

  const publicRoutes = ['/', '/registrar']

  if (!token) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/registrar', '/home', '/produto', '/promocao'],
}
