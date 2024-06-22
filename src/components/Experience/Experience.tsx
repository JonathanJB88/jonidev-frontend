import { ExperienceContent, IntroExperiencie } from '@/components';

export const Experience = () => {
  return (
    <div className='relative'>
      <div className='mx-auto flex flex-col lg:flex-row'>
        <IntroExperiencie />

        <ExperienceContent />
      </div>
    </div>
  );
};
