import { HeroParallax, MobileGrid } from '@/components';
import { Project, ProjectItem, ProjectTranslations } from '@/interfaces';

interface Props {
  translations: ProjectTranslations;
}

export const Projects = ({ translations }: Props) => {
  const projects = getProjectTranslations(translations.projects);

  return (
    <>
      <HeroParallax projects={projects} translations={translations} />
      <MobileGrid projects={projects} translations={translations} />
    </>
  );
};

const getProjectTranslations = (projects: ProjectItem[]): Project[] => {
  return projects.map((project) => {
    return {
      title: project.title,
      link: project.link,
      thumbnail: project.thumbnail,
    };
  });
};
