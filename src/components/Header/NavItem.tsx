'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { subtitleFont } from '@/config';
import { scrollTo } from '@/utils';

interface Props {
  node: string | ReactNode;
  href: string;
  isActive: boolean;
  mobileHidden?: boolean;
}

export const NavItem = ({
  node,
  href,
  isActive,
  mobileHidden = false,
}: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('mailto:')) return;
    const isInitSection = href.endsWith('#');
    const [route, selector] = href.split('#');

    const currentPath = window?.location.pathname;
    const isSamePage = currentPath === route;

    if (isSamePage) {
      e.preventDefault();

      const section = isInitSection
        ? document.body
        : (document.querySelector(`#${selector}`) as HTMLElement);

      if (section) {
        const top = section.offsetTop;
        scrollTo(top);

        router.push(href, { scroll: false });
      }
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
      locale={false}
      aria-label={href}
      onClick={handleClick}
      scroll={false}
      className={linkClassName}
    >
      {node}
    </Link>
  );
};
