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
} from '@/components';
import { useScrollOpacity } from '@/hooks';

export const Intro = () => {
  const { opacity } = useScrollOpacity();

  return (
    <AuroraBackground className='h-screen w-screen' style={{ opacity }}>
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
              Hola, soy <br className='block md:hidden' />
              <span
                className={`text-crimson font-bold text-h1-xs md:text-h1-md lg:text-h1-lg ${titleFont.className}`}
              >
                Jonathan Bracho.
              </span>
            </Title>

            <p className='text-softwhite mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus corporis et, dolorem accusamus ipsam expedita eos
              aperiam sunt! Eum nemo ut, culpa minima cum corporis molestias
              aliquid rerum accusantium? Aspernatur.
            </p>
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
  );
};

const ctaLinks = [
  {
    href: 'mailto:jonajes0288@gmail.com',
    ariaLabel: 'Contact Me',
    Icon: RiMailSendLine,
    text: 'Contáctame',
    classname: 'bg-crimson text-softwhite hover:bg-dark-crimson',
  },
  {
    href: 'https://www.linkedin.com/in/jonathanbracho/',
    ariaLabel: 'LinkedIn Profile',
    Icon: CiLinkedin,
    text: 'LinkedIn',
    classname:
      'bg-transparent text-crimson border border-crimson hover:bg-crimson hover:text-softwhite',
  },
];
