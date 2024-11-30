import Image from 'next/image';
import Link from 'next/link';
import { IoIosLink } from 'react-icons/io';
import type { Project } from '@/interfaces';

interface Props {
  project: Project;
}

export const ProjectGridCard = ({ project }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='relative w-full h-60'>
        <Image
          fill
          src={project.thumbnail}
          alt={project.title}
          className='object-cover'
        />
      </div>
      <div className='bg-charcoal py-2 md:py-4 px-3'>
        <div className='flex justify-between items-center'>
          <h4 className='text-softwhite text-body-xs md:text-body-md'>
            {project.title}
          </h4>
          <div className='relative z-40 flex items-center gap-2'>
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-softwhite'
            >
              <IoIosLink className='text-softwhite inline-block mx-2' />
              <span>Preview</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
