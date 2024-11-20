'use client';

import { CiLinkedin } from 'react-icons/ci';
import { RiMailSendLine } from 'react-icons/ri';
import { subtitleFont, titleFont } from '@/config';
import {
  AuroraBackground,
  TextHightlight,
  FadeInSection,
  ProfilePicture,
  Title,
  IntroCtaLinks,
  BotAssistant,
} from '@/components';
import { useScrollOpacity } from '@/hooks';
import { IntroTranslations } from '@/interfaces';

interface Props {
  translations: IntroTranslations;
}

const startYear = 2019;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - startYear;

export const Intro = ({ translations }: Props) => {
  const { opacity } = useScrollOpacity();

  const description = translations.description.replace(
    '{years}',
    yearsOfExperience.toString()
  );

  const ctaLinks = getCtaLinks(translations.cta);

  return (
    <>
      <AuroraBackground
        className='h-screen w-screen mt-[-96px] md:mt-[-128px]'
        style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
      >
        <div className='responsive-section'>
          <FadeInSection>
            <div className='flex justify-center items-end mb-8'>
              <ProfilePicture />
              <TextHightlight
                title='Frontend Developer'
                classname={`${subtitleFont.className}`}
              />
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='flex flex-col justify-center items-center text-center'>
              <Title>
                {translations.title} <br className='block md:hidden' />
                <span
                  className={`text-crimson font-bold text-h1-xs md:text-h1-md lg:text-h1-lg ${titleFont.className}`}
                >
                  {translations.subtitle}
                </span>
              </Title>

              <p className='text-softwhite mb-4'>{description}</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='flex justify-center space-x-6 mt-6'>
              {ctaLinks.map((cta) => (
                <IntroCtaLinks key={cta.href} {...cta} />
              ))}
            </div>
          </FadeInSection>
        </div>
      </AuroraBackground>
      <BotAssistant opacity={opacity} translations={translations} />
    </>
  );
};

const getCtaLinks = (cta: IntroTranslations['cta']) => {
  return cta.map((ctaItem, index) => {
    return {
      href:
        index === 0
          ? 'mailto:jonajes0288@gmail.com'
          : 'https://www.linkedin.com/in/jonathanbracho/',
      ariaLabel: ctaItem.ariaLabel,
      Icon: index === 0 ? RiMailSendLine : CiLinkedin,
      text: ctaItem.text,
      classname:
        index === 0
          ? 'bg-crimson text-softwhite hover:bg-dark-crimson'
          : 'bg-transparent text-crimson border border-crimson hover:bg-crimson hover:text-softwhite',
    };
  });
};
