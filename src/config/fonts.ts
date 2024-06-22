import { Inter, Roboto, Bitter } from 'next/font/google';

export const titleFont = Bitter({
  subsets: ['latin'],
  weight: ['500', '700'],
});
export const subtitleFont = Roboto({ subsets: ['latin'], weight: ['400'] });
export const bodyFont = Inter({ subsets: ['latin'], weight: ['400'] });
