export interface MenuItem {
  title: string;
  href: string;
}

export interface CtaItem {
  text: string;
  ariaLabel: string;
}

export interface ExperienceItem {
  company: string;
  description: string;
  date: string;
}

export interface ProjectItem {
  title: string;
  link: string;
  thumbnail: string;
}

export interface HeaderTranslations {
  experience: MenuItem;
  projects: MenuItem;
  about: MenuItem;
  writing: MenuItem;
  contact: MenuItem;
}

export interface FooterTranslations {
  title: string;
  subtitle: string;
}

export interface IntroTranslations {
  title: string;
  subtitle: string;
  description: string;
  cta: CtaItem[];
  bot: {
    title: string;
    cta: string;
    closeAriaLabel: string;
    name: string;
    firstMessage: string;
    inputPlaceholder: string;
    sendButton: string;
  };
}

export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  description: string;
  cta: CtaItem;
  experience: ExperienceItem[];
}

export interface ProjectTranslations {
  title: string;
  subtitle: string;
  description: string;
  projects: ProjectItem[];
}

export interface AboutTranslations {
  title: string;
  description: string[];
}

export interface WritingTranslations {
  title: string;
  description: string;
  baseRoute: string;
}

export type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | JSONObject
  | HeaderTranslations
  | FooterTranslations
  | IntroTranslations
  | ExperienceTranslations
  | ProjectTranslations
  | AboutTranslations
  | WritingTranslations;

export interface JSONObject {
  [key: string]: JSONValue;
}

export interface SiteTranslations {
  header: HeaderTranslations;
  footer: FooterTranslations;
  intro: IntroTranslations;
  experience: ExperienceTranslations;
  projects: ProjectTranslations;
  about: AboutTranslations;
  writing: WritingTranslations;
  [key: string]: JSONValue;
}
