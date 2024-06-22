import { Project } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosLink } from 'react-icons/io';

interface Props {
  project: Project;
}

export const ProjectGridCard = ({ project }: Props) => {
  return (
    <div className='relative flex flex-col'>
      <div className='relative'>
        <div className='w-full h-60'>
          <Image fill src={project.thumbnail} alt='' />
        </div>
      </div>
      <div className='bg-charcoal py-4 px-3'>
        <div className='flex justify-between items-center'>
          <h3 className='text-sm text-softwhite'>{project.title}</h3>
          <div className='relative z-40 flex items-center gap-2'>
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-softwhite'
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
