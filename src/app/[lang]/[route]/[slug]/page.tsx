import { getPostDetail } from '@/actions';
import { Locale } from '@/interfaces';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    lang: Locale;
    route: 'writing' | 'publicaciones';
    slug: string;
  };
}

export default async function PostDetail({ params }: Props) {
  const { lang, route, slug } = params;

  if (route !== 'writing' && route !== 'publicaciones') redirect('/home');

  const post = await getPostDetail(slug, lang);

  if (!post) redirect('/home');

  return (
    <article>
      <div className='my-80 mx-20'>
        <pre>
          <code>{JSON.stringify(post, null, 2)}</code>
        </pre>
      </div>
    </article>
  );
}
