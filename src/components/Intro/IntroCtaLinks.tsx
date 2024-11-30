import type { IconType } from 'react-icons';

interface Props {
  href: string;
  ariaLabel: string;
  Icon: IconType;
  text: string;
  classname?: string;
}

export const IntroCtaLinks = ({
  href,
  Icon,
  text,
  ariaLabel,
  classname,
}: Props) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target='_blank'
      rel='noopener noreferrer'
      className={`px-4 py-1 md:px-6 md:py-2 transition-all ${classname}`}
    >
      <Icon className='inline-block' />
      <span className='mx-2'>{text}</span>
    </a>
  );
};
