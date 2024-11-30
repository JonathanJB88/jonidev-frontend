import type { Metadata } from 'next';
import { Footer, Header, SocialMedia, WrapperScroll } from '@/components';
import { bodyFont } from '@/config';
import { generateBaseMetadata } from '@/utils';
import { getDictionary } from './dictionaries';

import type { Locale } from '@/interfaces';

import './globals.css';

interface Props {
  children: React.ReactNode;
  params: Record<'lang', Locale>;
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  return generateBaseMetadata({ params });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { header, footer } = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={bodyFont.className}>
        <WrapperScroll>
          <div className='main-container'>
            <Header translations={header} locale={params.lang} />
            <main className='flex flex-col relative'>{children}</main>
            <SocialMedia />
            <Footer translations={footer} />
          </div>
        </WrapperScroll>
      </body>
    </html>
  );
}
