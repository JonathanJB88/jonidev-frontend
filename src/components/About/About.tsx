import Image from 'next/image';
import { titleFont } from '@/config';
import { FadeInSection, SliderSkills } from '@/components';

export const About = () => {
  return (
    <div className='flex flex-col justify-center container mx-auto'>
      <FadeInSection>
        <div className='mx-auto md:px-0'>
          <h1 className={`text-crimson md:text-left ${titleFont.className}`}>
            About Me.
          </h1>
          <p className='mt-4 md:mt-8 w-full md:w-2/3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing
            adipiscing elit. Pellentesque imperdiet consectetur dolor in
            elementum.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div className='flex flex-col md:flex-row justify-center items-center pt-12 md:pt-32 w-full'>
          <div className='md:w-1/2 flex justify-center items-center md:hidden'>
            <Image
              src='https://picsum.photos/300/300'
              alt='Jonathan Bracho Background'
              width={600}
              height={600}
              className='object-cover'
            />
          </div>

          <div className='md:w-1/2 mt-6 md:mt-0'>
            <p className='md:mr-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore dicta minus id maiores culpa molestiae similique tempore
              eum provident.
            </p>
          </div>

          <div className='md:w-1/2 md:flex justify-center items-center hidden'>
            <Image
              src='https://picsum.photos/300/300'
              alt='Jonathan Bracho Background'
              width={600}
              height={600}
              className='object-cover'
            />
          </div>
        </div>
      </FadeInSection>

      <div className='w-full pt-28 md:pt-40'>
        <FadeInSection delay={1}>
          <SliderSkills />
        </FadeInSection>
      </div>
    </div>
  );
};
