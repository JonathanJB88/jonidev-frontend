interface Props {
  params: {
    lang: Locale;
    route: 'writing' | 'publicaciones';
    slug: string;
  };
}

export default function PostDetail({ params }: Props) {
  const { lang, route, slug } = params;

  return (
    <div>
      <h1>Post Detail</h1>
    </div>
  );
}
