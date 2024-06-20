'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { subtitleFont } from '@/config';
import { useActiveSection } from '@/hooks';

interface Props {
  node: string | ReactNode;
  href: string;
  mobileHidden?: boolean;
}

const scrollTo = (top = 0) => {
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};

export const NavItem = ({ node, href, mobileHidden = false }: Props) => {
  const isActive = useActiveSection(href);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('mailto:')) return;
    e.preventDefault();
    const isInitSection = href === '/#';
    const section = isInitSection
      ? document.body
      : (document.querySelector(href.slice(1)) as HTMLElement);
    if (section) {
      const top = section.offsetTop;
      scrollTo(top);
      window.history.pushState({}, '', href);
    }
  };

  const linkClassName = clsx(
    mobileHidden && 'hidden md:inline-flex',
    !mobileHidden && 'inline-flex',
    isActive ? 'text-crimson' : 'hover:text-softwhite',
    'mx-2',
    'hover:text-crimson',
    'font-bold',
    'transition-colors',
    'whitespace-nowrap',
    subtitleFont.className
  );

  return (
    <Link
      key={href}
      href={href}
      aria-label={href}
      onClick={handleClick}
      scroll={false}
      className={linkClassName}
    >
      {node}
    </Link>
  );
};
