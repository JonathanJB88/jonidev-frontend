'use client';

import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

export const NavItem = ({ name, href }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href.slice(1)) as HTMLElement;
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      key={href}
      href={href}
      aria-label={name}
      onClick={handleClick}
      scroll={false}
      className='relative block px-2 py-2 hover:text-crimson transition-colors'
    >
      {name}
    </Link>
  );
};
