import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

const getLocale = (req: NextRequest) => {
  const headers = req.headers.get('accept-language');

  if (!headers) return defaultLocale;
  const [locale] = headers.split(',').map((x) => x.split(';')[0].split('-')[0]);

  return locales.includes(locale) ? locale : defaultLocale;
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(req);

  req.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(req.nextUrl.toString());
}

export const config = {
  matcher: ['/((?!_next|api|img|assets|favicon.ico).*)'],
};
