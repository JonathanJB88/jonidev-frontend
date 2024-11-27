import { redirect } from 'next/navigation';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { bodyFont, subtitleFont, titleFont } from '@/config';
import { getPostDetail } from '@/actions';
import { urlFor } from '@/utils';
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

  if (route !== 'writing' && route !== 'publicaciones') redirect('/home');

  const post = await getPostDetail(slug, lang);

  if (!post) redirect('/home');

  return (
    <article className='responsive-section'>
      {/* Title */}
      <div className='w-full'>
        <h1 className={`${titleFont.className} mb-6`}>{post.title}</h1>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div>
          {/* Cover image*/}
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.title}
              width={400}
              height={200}
              className='float-none md:float-right md:ml-6 mb-6 w-full md:w-3/5 h-auto object-cover'
            />
          )}
          {/* Información del autor */}
          <div className='flex items-center mb-6'>
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={50}
              height={50}
              className='rounded-full'
            />
            <div className={`ml-3 text-silver ${bodyFont.className}`}>
              <p className='text-lg'>{post.author.name}</p>
              <p className='text-sm'>{post.postDate}</p>
            </div>
          </div>

          {/* Etiquetas */}
          {post.tags && (
            <div className='flex flex-wrap gap-2 mb-6'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-3 py-1 rounded-full text-sm bg-transparent text-crimson border border-crimson'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Contenido del post */}
          <div className='prose prose-lg max-w-none'>
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => (
                    <Image
                      src={urlFor(value).width(800).url()}
                      alt={value.alt || post.title}
                      width={800}
                      height={450}
                      className='w-full h-auto mb-10'
                    />
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className={`${titleFont.className} mb-10 text-4xl`}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className={`${subtitleFont.className} mb-8`}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className={`${subtitleFont.className} mb-8`}>
                      {children}
                    </h3>
                  ),
                  normal: ({ children }) => (
                    <p className={`${bodyFont.className} mb-6 leading-normal`}>
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <p className='px-14'>
                      <blockquote className='border-l-4 border-silver pl-4 italic my-20'>
                        {children}
                      </blockquote>
                    </p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className='list-disc list-inside mb-6'>{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className='list-decimal list-inside mb-6'>
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className={`${bodyFont.className} mb-3 pl-6`}>
                      {children}
                    </li>
                  ),
                  number: ({ children }) => (
                    <li className={`${bodyFont.className} mb-3 pl-6`}>
                      {children}
                    </li>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  link: ({ value, children }) => {
                    const { href } = value;
                    return (
                      <a
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-crimson underline'
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
