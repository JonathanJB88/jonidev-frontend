import { titleFont } from '@/config';
import { FadeInSection } from '@/components';

const blogPosts = [
  {
    date: 'Feb 28 2024',
    title: 'Getting something from Nothing',
    description:
      "When you're trying to use your phone less, what do you upgrade to? A sort-of review of swapping my phone for Nothing.",
  },
  {
    date: 'Feb 22 2024',
    title: "It's OK to abandon your side-project",
    description:
      "In an industry that pressures developers to always be shipping side-projects, it can be helpful to be retrospective with the projects that don't make the cut.",
  },
  {
    date: 'Dec 31 2023',
    title: '2023 Wrapped',
    description:
      'A quick look back at what went well in 2023, what did not, and what is next for the upcoming year.',
  },
  {
    date: 'Dec 31 2023',
    title: '2023 Wrapped',
    description:
      'A quick look back at what went well in 2023, what didn’t, and what’s next for the upcoming year.',
  },
  {
    date: 'Dec 31 2023',
    title: '2023 Wrapped',
    description:
      'A quick look back at what went well in 2023, what didn’t, and what’s next for the upcoming year.',
  },
  {
    date: 'Dec 31 2023',
    title: '2023 Wrapped',
    description:
      'A quick look back at what went well in 2023, what didn’t, and what’s next for the upcoming year.',
  },
];

export const Blog = () => {
  return (
    <div className='container mx-auto'>
      <FadeInSection>
        <div>
          <h1 className={`text-crimson mb-6 md:mb-10 ${titleFont.className}`}>
            My writing.
          </h1>
          <p className='md:w-4/5'>
            Here you will find my writing on topics ranging from coding and the
            web industry, to linguistics and natural language processing - there
            is also a{' '}
            <a href='#' className='text-crimson underline'>
              handy RSS feed
            </a>
            , if you would prefer to subscribe. If you would like to chat about
            anything I have written,{' '}
            <a href='#' className='text-crimson underline'>
              say hi on Mastodon
            </a>
            .
          </p>
        </div>
      </FadeInSection>

      <div className='pt-8 md:pt-20'>
        {blogPosts.map((post, index) => (
          <FadeInSection key={index} delay={index * 0.5}>
            <div className='my-10 flex flex-col md:flex-row items-start'>
              <div className='flex flex-row items-center w-2/3 mb-4 md:mb-0'>
                <p className='text-crimson uppercase tracking-widest'>
                  {post.date}
                </p>
                <hr className='hidden md:block w-1/3 mx-4 border border-spacing-4 border-crimson' />
              </div>

              <div className='md:w-full flex items-start flex-col'>
                <h3 className={`${titleFont.className}`}>{post.title}</h3>
                <p className='pt-4'>{post.description}</p>
              </div>
            </div>
            {index !== blogPosts.length - 1 && (
              <hr className='my-8 opacity-30' />
            )}
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};
