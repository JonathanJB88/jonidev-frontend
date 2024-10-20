'use client';
import { NavItem } from '@/components';
import { useActiveSection } from '@/hooks';
import type { HeaderOptions } from '@/interfaces';

interface Props {
  menuItems: HeaderOptions[];
}

export const HeaderNav = ({ menuItems }: Props) => {
  const sections = menuItems
    .map(({ href }) => href.split('#')[1])
    .filter(Boolean);

  const activeSection = useActiveSection(sections);

  return (
    <nav className='flex mx-auto justify-center items-center overflow-hidden'>
      {menuItems.map(({ node, href, mobileHidden }) => {
        const section = href.split('#')[1] || '#';
        const isActive = section === activeSection;

        return (
          <NavItem
            key={href}
            node={node}
            href={href}
            mobileHidden={mobileHidden}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
};
