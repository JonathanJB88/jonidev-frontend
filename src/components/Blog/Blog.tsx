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
          <h1
            className={`text-4xl md:text-7xl font-bold text-crimson mb-6 md:mb-10 ${titleFont.className}`}
          >
            My writing.
          </h1>
          <p className='text-base md:text-xl mb-12 md:w-4/5'>
            Here you'll find my writing on topics ranging from coding and the
            web industry, to linguistics and natural language processing -
            there's also a{' '}
            <a href='#' className='text-crimson underline'>
              handy RSS feed
            </a>
            , if you'd prefer to subscribe. If you'd like to chat about anything
            I've written,{' '}
            <a href='#' className='text-crimson underline'>
              say hi on Mastodon
            </a>
            .
          </p>
        </div>
      </FadeInSection>

      <div className='mt-0 md:mt-8'>
        {blogPosts.map((post, index) => (
          <FadeInSection key={index} delay={index * 0.5}>
            <div className='my-10 flex flex-col md:flex-row items-start'>
              <div className='flex flex-row items-center w-2/3 mb-4 md:mb-0'>
                <p className='text-sm md:text-base text-crimson uppercase tracking-widest'>
                  {post.date}
                </p>
                <hr className='hidden md:block w-1/3 mx-4 border border-spacing-4 border-crimson' />
              </div>

              <div className='md:w-full flex items-start flex-col'>
                <h2
                  className={`text-xl md:text-3xl font-bold ${titleFont.className}`}
                >
                  {post.title}
                </h2>
                <p className='text-base md:text-lg pt-4'>{post.description}</p>
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
