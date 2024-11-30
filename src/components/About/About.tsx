import Image from 'next/image';
import { titleFont } from '@/config';
import { FadeInSection, SliderSkills } from '@/components';
import type { AboutTranslations, Skill } from '@/interfaces';

interface Props {
  translations: AboutTranslations;
}

export const About = ({ translations }: Props) => {
  return (
    <div className='flex flex-col justify-center container mx-auto'>
      <FadeInSection>
        <div className='mx-auto md:px-0'>
          <h1 className={`text-crimson md:text-left ${titleFont.className}`}>
            {translations.title}
          </h1>
          <p className='mt-4 md:mt-8 w-full md:w-2/3'>
            {translations.description[0]}
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className='flex flex-col md:flex-row justify-center items-center pt-12 md:pt-24 w-full'>
          <div className='md:w-1/2 flex justify-center items-center md:hidden'>
            <Image
              src='/img/jonathan_bracho_background.webp'
              alt='Jonathan Bracho Background'
              width={600}
              height={600}
              className='object-cover'
            />
          </div>

          <div className='md:w-1/2 mt-6 md:mt-0'>
            <p className='md:mr-4'>{translations.description[1]}</p>
          </div>

          <div className='md:w-1/2 md:flex justify-center items-center hidden'>
            <Image
              src='/img/jonathan_bracho_background.webp'
              alt='Jonathan Bracho Background'
              width={600}
              height={600}
              className='object-cover'
            />
          </div>
        </div>
      </FadeInSection>

      <div className='w-full pt-12 md:pt-24'>
        <FadeInSection delay={0.3}>
          <SliderSkills skills={skills} />
        </FadeInSection>
      </div>
    </div>
  );
};

const skills: Skill[] = [
  { src: '/img/skills/bootstrap.svg', alt: 'Bootstrap' },
  { src: '/img/skills/css.svg', alt: 'CSS' },
  { src: '/img/skills/cypress.svg', alt: 'Cypress' },
  { src: '/img/skills/docker.svg', alt: 'Docker' },
  { src: '/img/skills/express.svg', alt: 'Express' },
  { src: '/img/skills/git.svg', alt: 'Git' },
  { src: '/img/skills/github.svg', alt: 'GitHub' },
  { src: '/img/skills/graphql.svg', alt: 'GraphQL' },
  { src: '/img/skills/html.svg', alt: 'HTML' },
  { src: '/img/skills/javascript.svg', alt: 'JavaScript' },
  { src: '/img/skills/jest.svg', alt: 'Jest' },
  { src: '/img/skills/materialui.svg', alt: 'MaterialUi' },
  { src: '/img/skills/mongodb.svg', alt: 'MongoDB' },
  { src: '/img/skills/nextjs.svg', alt: 'NextJS' },
  { src: '/img/skills/nodejs.svg', alt: 'NodeJS' },
  { src: '/img/skills/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/img/skills/prisma.svg', alt: 'Prisma' },
  { src: '/img/skills/react-native.svg', alt: 'React Native' },
  { src: '/img/skills/react-testing.svg', alt: 'React Testing Library' },
  { src: '/img/skills/react.svg', alt: 'React' },
  { src: '/img/skills/redux.svg', alt: 'Redux' },
  { src: '/img/skills/sass.svg', alt: 'Sass' },
  { src: '/img/skills/scrum.svg', alt: 'Scrum' },
  { src: '/img/skills/tailwindcss.svg', alt: 'TailwindCSS' },
  { src: '/img/skills/typescript.svg', alt: 'TypeScript' },
];
