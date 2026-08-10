import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { hasLocale } from 'next-intl';
import { routing } from './i18n/routing';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocale(routing.locales, pathname.split('/')[1])) return NextResponse.next();

  request.nextUrl.pathname = `/${routing.defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
