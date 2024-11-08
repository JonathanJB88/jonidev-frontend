import { getPostDetail } from '@/actions';
import { Locale } from '@/interfaces';

interface Props {
  params: {
    lang: Locale;
    route: 'writing' | 'publicaciones';
    slug: string;
  };
}

export default async function PostDetail({ params }: Props) {
  const { lang, route, slug } = params;
  // Testing commits

  const post = await getPostDetail(slug, lang);

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
