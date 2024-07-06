'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MotionValue, motion } from 'framer-motion';
import { Project } from '@/interfaces';

interface Props {
  project: Project;
  translate: MotionValue<number>;
}

export const ProjectCard = ({ project, translate }: Props) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className='group/product h-96 w-[30rem] relative flex-shrink-0'
    >
      <Link
        href={project.link}
        className='block group-hover/product:shadow-2xl'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src={project.thumbnail}
          height='600'
          width='600'
          className='object-cover object-left-top absolute h-full w-full inset-0'
          alt={project.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
      <p className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-softwhite'>
        {project.title}
      </p>
    </motion.div>
  );
};
