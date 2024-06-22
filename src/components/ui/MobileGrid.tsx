import { FadeInSection, IntroProjects, ProjectGridCard } from '@/components';
import { Project } from '@/interfaces';

interface Props {
  projects: Project[];
}

export const MobileGrid = ({ projects }: Props) => {
  return (
    <div className='relative container flex md:hidden min-h-screen flex-col justify-center overflow-hidden'>
      <div className='max-w-screen-xl w-full'>
        <IntroProjects />
        <div className='grid w-full gap-6'>
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.5}>
              <ProjectGridCard key={index} project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};
