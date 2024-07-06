import { titleFont } from '@/config';
import { FadeInSection } from '@/components';
import { ProjectTranslations } from '@/interfaces';

interface Props {
  translations: ProjectTranslations;
}

export const IntroProjects = ({ translations }: Props) => {
  return (
    <div className='md:responsive-section'>
      <div className='relative mx-auto py-6 md:py-40 md:px-4 w-full md:left-0 md:top-0 max-w-7xl'>
        <FadeInSection>
          <h1 className={`text-crimson ${titleFont.className}`}>
            {translations.title} <br /> {translations.subtitle}
          </h1>
          <p className={`mt-4 md:mt-8`}>{translations.description}</p>
        </FadeInSection>
      </div>
    </div>
  );
};
