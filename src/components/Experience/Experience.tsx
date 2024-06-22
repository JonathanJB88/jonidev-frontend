import { ExperienceContent, IntroExperiencie } from '@/components';

export const Experience = () => {
  return (
    <div className='relative'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <IntroExperiencie />

        <ExperienceContent />
      </div>
    </div>
  );
};
