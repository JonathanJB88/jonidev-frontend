import Link from 'next/link';
import { titleFont } from '@/config';
import { FadeInSection } from '@/components';
import { Post, WritingTranslations } from '@/interfaces';

interface Props {
  posts: Post[];
  translations: WritingTranslations;
}

export const Blog = ({ posts, translations }: Props) => {
  const description = translations.description.replace(
    'LinkedIn',
    `<a href="https://www.linkedin.com/in/jonathanbracho/" target="_blank" rel="noopener noreferrer" class="text-crimson underline">LinkedIn</a>`
  );

  return (
    <div className='container mx-auto'>
      <FadeInSection>
        <div>
          <h1 className={`text-crimson mb-6 md:mb-10 ${titleFont.className}`}>
            {translations.title}
          </h1>
          <p className='md:w-4/5'>
            <span
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </p>
        </div>
      </FadeInSection>

      <div className='pt-8 md:pt-20'>
        {posts.map(({ id, title, description, postDate, slug }, index) => (
          <FadeInSection key={id} delay={index * 0.2}>
            <div className='my-7 flex flex-col md:flex-row items-start'>
              <div className='flex flex-row items-center w-2/3 mb-4 md:mb-0'>
                <p className='text-crimson uppercase tracking-widest'>
                  {postDate}
                </p>
                <hr className='hidden md:block w-1/3 mx-4 border border-spacing-4 border-crimson' />
              </div>

              <div className='md:w-full flex items-start flex-col'>
                <Link
                  href={`/${translations.baseRoute}/${slug}`}
                  locale={false}
                  aria-label={slug}
                  scroll={false}
                  className='hover:text-crimson transition-all duration-300 ease-in-out'
                >
                  <h3 className={`${titleFont.className}`}>{title}</h3>
                </Link>
                <p className='pt-4'>{description}</p>
              </div>
            </div>
            {index !== posts.length - 1 && <hr className='my-8 opacity-30' />}
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};
