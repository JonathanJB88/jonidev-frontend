'use client';

import { NavItem } from '@/components';
import { useActiveSection } from '@/hooks';
import type { HeaderOptions } from '@/interfaces';

interface Props {
  menuItems: HeaderOptions[];
}

export const HeaderNav = ({ menuItems }: Props) => {
  const activeSection = useActiveSection(menuItems);

  return (
    <nav className='flex justify-left items-center overflow-hidden'>
      {menuItems.map(({ node, href, mobileHidden }) => {
        const section = href.split('#')[1] || '#';
        const isActive = `#${section}` === activeSection;

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
