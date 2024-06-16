import { Inter, Poppins, Roboto } from 'next/font/google';

export const titleFont = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
});
export const subtitleFont = Roboto({ subsets: ['latin'], weight: ['400'] });
export const bodyFont = Inter({ subsets: ['latin'], weight: ['400'] });
