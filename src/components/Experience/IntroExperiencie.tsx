import { FaFileDownload } from 'react-icons/fa';
import { subtitleFont, titleFont } from '@/config';
import { FadeInSection } from '@/components';

export const IntroExperiencie = () => {
  return (
    <div className='flex flex-col w-full lg:w-1/3 mt-4'>
      <FadeInSection>
        <h1
          className={`text-crimson text-body-xs md:text-body-md uppercase tracking-widest ${titleFont.className}`}
        >
          Working Process
        </h1>
        <h2 className={`leading-normal  mb-4 ${subtitleFont.className}`}>
          My working experience
        </h2>
        <p className='mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          dolore! Ullam ab autem ea ducimus asperiores ipsum, maiores assumenda
          deserunt error aspernatur velit perferendis magni quas aliquid at
          laudantium! Amet?
        </p>
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <a
          href='/assets/jonathan_bracho_frontend_developer.pdf'
          download
          aria-label='Download Jonathan Bracho CV'
          className='mr-auto bg-transparent text-crimson border border-crimson hover:bg-crimson hover:text-softwhite px-6 py-2 transition-all'
        >
          <FaFileDownload className='inline-block' />
          <span className='mx-2'>Download CV</span>
        </a>
      </FadeInSection>
    </div>
  );
};
