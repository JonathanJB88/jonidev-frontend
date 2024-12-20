import { redirect } from 'next/navigation';
import type { Locale } from '@/interfaces';

interface Props {
  params: Record<'lang', Locale>;
}

export default function Intro({ params }: Props) {
  return redirect(`${params.lang}/home`);
}
