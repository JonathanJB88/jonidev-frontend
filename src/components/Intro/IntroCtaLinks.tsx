import { IconType } from 'react-icons';

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
      rel='noopener noreferrer'
      className={`px-6 py-2 transition-all ${classname}`}
    >
      <Icon className='inline-block' />
      <span className='mx-2'>{text}</span>
    </a>
  );
};
