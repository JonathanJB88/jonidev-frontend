import { subtitleFont, titleFont } from '@/config';
import { FadeInSection } from '@/components';

export const IntroProjects = () => {
  return (
    <div className='md:responsive-section'>
      <div className='relative mx-auto py-6 md:py-40 md:px-4 w-full md:left-0 md:top-0 max-w-7xl'>
        <FadeInSection>
          <h1
            className={`text-4xl md:text-7xl font-bold text-crimson ${titleFont.className}`}
          >
            The Ultimate <br /> development studio
          </h1>
          <p
            className={`max-w-2xl text-base md:text-xl mt-4 md:mt-8 ${subtitleFont.className}`}
          >
            We build beautiful products with the latest technologies and
            frameworks. We are a team of passionate developers and designers
            that love to build amazing products.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
};
