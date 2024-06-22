import { Inter, Roboto, Bitter } from 'next/font/google';

export const titleFont = Bitter({
  subsets: ['latin'],
  weight: ['500', '700'],
  adjustFontFallback: true,
  fallback: ['serif'],
  preload: true,
  display: 'swap',
  style: 'normal',
});
export const subtitleFont = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  adjustFontFallback: true,
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap',
  style: 'normal',
});
export const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400'],
  adjustFontFallback: true,
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap',
  style: 'normal',
});
