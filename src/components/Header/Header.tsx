import Image from 'next/image';
import { NavItem } from '@/components';

const menuItems = [
  {
    node: (
      <Image
        src='/img/jonathan_bracho-logo.png'
        alt='Jonathan Bracho Logo'
        width={50}
        height={50}
      />
    ),
    href: '/#',
  },
  { node: 'Experiencia', href: '/#experiencia' },
  { node: 'Proyectos', href: '/#proyectos' },
  { node: 'Sobre mí', href: '/#sobre-mi' },
  { node: 'Blog', href: '/#blog' },
  {
    node: 'Contacto',
    href: 'mailto:jonajes0288@gmail.com',
    mobileHidden: true,
  },
];

export const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 w-full fixed top-0 z-10 text-softwhite'>
      <nav className='flex mx-auto justify-center items-center overflow-hidden'>
        {menuItems.map(({ node, href, mobileHidden }) => (
          <NavItem
            key={href}
            node={node}
            href={href}
            mobileHidden={mobileHidden}
          />
        ))}
      </nav>
    </header>
  );
};
