import { ExperienceContent, IntroExperiencie } from '@/components';
import type { ExperienceTranslations } from '@/interfaces';

interface Props {
  translations: ExperienceTranslations;
}

export const Experience = ({ translations }: Props) => {
  return (
    <div className='relative'>
      <div className='mx-auto flex flex-col lg:flex-row'>
        <IntroExperiencie translations={translations} />

        <ExperienceContent translations={translations} />
      </div>
    </div>
  );
};
