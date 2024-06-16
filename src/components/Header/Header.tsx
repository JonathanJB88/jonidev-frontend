import Image from 'next/image';
import { NavItem } from '@/components';

const menuItems = [
  { name: 'Experiencia', href: '/#experiencia' },
  { name: 'Proyectos', href: '/#proyectos' },
  { name: 'Sobre mí', href: '/#sobre-mi' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contacto', href: 'mailto:jonajes0288@gmail.com' },
];

export const Header = () => {
  return (
    <header className='fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 text-softwhite'>
      <nav className='flex px-3 text-sm md:text-base font-bold justify-center items-center whitespace-nowrap mx-auto'>
        <Image
          src='/img/jonathan_bracho-logo.png'
          alt='Jonathan Bracho Logo'
          width={50}
          height={50}
        />

        {menuItems.map(({ name, href }) => (
          <NavItem key={href} name={name} href={href} />
        ))}
      </nav>
    </header>
  );
};
