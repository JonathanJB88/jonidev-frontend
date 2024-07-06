import type { FooterTranslations } from '@/interfaces';

interface Props {
  translations: FooterTranslations;
}

export const Footer = ({ translations }: Props) => {
  return (
    <footer className='flex px-6 mb-4 md:fixed md:bottom-[40px] md:left-[40px] md:text-left md:transform md:origin-bottom-left md:rotate-[-90deg]'>
      <div className='responsive-section mx-auto text-center'>
        <small>
          {`© ${new Date().getFullYear()} | ${translations.title} - ${
            translations.subtitle
          }`}
        </small>
      </div>
    </footer>
  );
};
