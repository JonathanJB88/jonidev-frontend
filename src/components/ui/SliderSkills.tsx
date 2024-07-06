'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { Skill } from '@/interfaces';

interface Props {
  skills: Skill[];
}

export const SliderSkills = ({ skills }: Props) => {
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

  return (
    <Slider {...settings}>
      {skills.map((skill, index) => (
        <div key={index}>
          <Image
            src={skill.src}
            alt={skill.alt}
            width={60}
            height={60}
            className='mx-auto w-16 h-16'
          />
        </div>
      ))}
    </Slider>
  );
};
