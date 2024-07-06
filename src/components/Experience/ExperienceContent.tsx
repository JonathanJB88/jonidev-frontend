import { FadeInSection, TimelineItem } from '@/components';
import { ExperienceItem, ExperienceTranslations } from '@/interfaces';

interface Props {
  translations: ExperienceTranslations;
}

export const ExperienceContent = ({ translations }: Props) => {
  const contentExperience = getContentExperience(translations.experience);

  return (
    <div className='ml-0 md:ml-12 lg:w-2/3'>
      <div className='container mx-auto w-full h-full'>
        <div className='relative wrap p-10 h-full'>
          <div className='border-2-2 border-crimson absolute h-full border right-[50%] border-spacing-[2px] rounded-[1%]'></div>

          {contentExperience.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.5}>
              <TimelineItem item={item} isReversed={index % 2 === 0} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

const getContentExperience = (experience: ExperienceItem[]) => {
  return experience.map((item) => {
    return {
      title: item.company,
      description: item.description,
      date: item.date,
    };
  });
};
