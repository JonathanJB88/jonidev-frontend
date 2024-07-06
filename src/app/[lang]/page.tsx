import { redirect } from 'next/navigation';
import { Locale } from '@/interfaces';

interface Props {
  params: Record<'lang', Locale>;
}

export default function Page({ params }: Props) {
  return redirect(`${params.lang}/home`);
}
