import Image from 'next/image';

export const ProfilePicture = () => {
  return (
    <Image
      src='/img/jonathan_profile_picture.svg'
      alt='Profile Picture'
      width={100}
      height={100}
      className='rounded-full mx-4'
    />
  );
};
