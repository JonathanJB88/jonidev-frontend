import { titleFont } from '@/config';
import { FadeInSection } from '@/components';
import { ProjectTranslations } from '@/interfaces';

interface Props {
  translations: ProjectTranslations;
}

export const IntroProjects = ({ translations }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center relative md:px-4 mx-auto w-full md:max-w-[769px] sm:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1024px] 2xl:max-w-[1280px]'>
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
