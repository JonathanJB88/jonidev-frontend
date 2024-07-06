import { FaFileDownload } from 'react-icons/fa';
import { subtitleFont, titleFont } from '@/config';
import { FadeInSection } from '@/components';
import { ExperienceTranslations } from '@/interfaces';

interface Props {
  translations: ExperienceTranslations;
}

export const IntroExperiencie = ({ translations }: Props) => {
  return (
    <div className='flex flex-col w-full lg:w-1/3 mt-4'>
      <FadeInSection>
        <h1
          className={`text-crimson text-body-xs md:text-body-md uppercase tracking-widest ${titleFont.className}`}
        >
          {translations.title}
        </h1>
        <h2 className={`leading-normal  mb-4 ${subtitleFont.className}`}>
          {translations.subtitle}
        </h2>
        <p className='mb-10'>{translations.description}</p>
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <a
          href='/assets/jonathan_bracho_frontend_developer.pdf'
          download
          aria-label={translations.cta.ariaLabel}
          className='mr-auto bg-transparent text-crimson border border-crimson hover:bg-crimson hover:text-softwhite px-6 py-2 transition-all'
        >
          <FaFileDownload className='inline-block' />
          <span className='mx-2'>{translations.cta.text}</span>
        </a>
      </FadeInSection>
    </div>
  );
};
