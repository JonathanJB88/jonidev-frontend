'use client';

import Slider from 'react-slick';
import Image from 'next/image';

export const SliderSkills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const skills = [
    { src: 'https://picsum.photos/200', alt: 'Skill 1' },
    { src: 'https://picsum.photos/200', alt: 'Skill 2' },
    { src: 'https://picsum.photos/200', alt: 'Skill 3' },
    { src: 'https://picsum.photos/200', alt: 'Skill 4' },
    { src: 'https://picsum.photos/200', alt: 'Skill 5' },
    { src: 'https://picsum.photos/200', alt: 'Skill 6' },
    { src: 'https://picsum.photos/200', alt: 'Skill 7' },
    { src: 'https://picsum.photos/200', alt: 'Skill 8' },
    { src: 'https://picsum.photos/200', alt: 'Skill 9' },
    { src: 'https://picsum.photos/200', alt: 'Skill 10' },
  ];

  return (
    <Slider {...settings}>
      {skills.map((skill, index) => (
        <div key={index}>
          <Image
            src={skill.src}
            alt={skill.alt}
            width={100}
            height={100}
            className='mx-auto'
          />
        </div>
      ))}
    </Slider>
  );
};
