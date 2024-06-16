'use client';

import Image from 'next/image';
import { CiLinkedin } from 'react-icons/ci';
import { RiMailSendLine } from 'react-icons/ri';
import { subtitleFont, titleFont } from '@/config';
import { AuroraBackground, Button, FadeInSection } from '@/components';
import { useScrollOpacity } from '@/hooks';

export const IntroSection = () => {
  const { opacity } = useScrollOpacity();

  return (
    <AuroraBackground style={{ opacity }}>
      <section className='relative flex custom-container flex-col items-center justify-center text-center h-screen p-4'>
        <FadeInSection>
          <div className='flex justify-center items-end mb-8'>
            <Image
              src='/img/jonathan_profile_picture.svg'
              alt='Profile Picture'
              width={100}
              height={100}
              className='rounded-full mx-4'
            />
            <Button
              borderRadius='1.75rem'
              className={`bg-crimson text-softwhite cursor-default font-semibold rounded-full transition-all text-xl md:text-2xl ${titleFont.className}`}
            >
              Frontend Developer
            </Button>
          </div>
        </FadeInSection>
        <FadeInSection>
          <h1
            className={`text-2xl md:text-4xl text-softwhite mb-4 ${subtitleFont.className}`}
          >
            Hola, soy{' '}
            <span
              className={`text-crimson font-semibold ${titleFont.className}`}
            >
              Jonathan Bracho.
            </span>
          </h1>
          <p className='text-base md:text-xl text-softwhite mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus corporis et, dolorem accusamus ipsam expedita eos
            aperiam sunt! Eum nemo ut, culpa minima cum corporis molestias
            aliquid rerum accusantium? Aspernatur.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className='flex justify-center space-x-4 mt-6'>
            <a
              href='mailto:jonajes0288@gmail.com'
              aria-label='Contact Me'
              rel='noopener noreferrer'
              className='bg-crimson text-softwhite px-6 py-2 rounded-full transition-all hover:bg-dark-crimson cursor-pointer'
            >
              <RiMailSendLine className='inline-block mx-2' />
              Contáctame
            </a>
            <a
              href='https://www.linkedin.com/in/jonathanbracho/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn Profile'
              className='bg-transparent text-crimson border border-crimson px-6 py-2 rounded-full transition-all hover:bg-crimson hover:text-white'
            >
              <CiLinkedin className='inline-block mx-2' />
              LinkedIn
            </a>
          </div>
        </FadeInSection>
      </section>
    </AuroraBackground>
  );
};
