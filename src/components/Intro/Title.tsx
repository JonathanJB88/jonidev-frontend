import { ReactNode } from 'react';
import { subtitleFont } from '@/config';

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => {
  return (
    <h1
      className={`text-2xl md:text-4xl text-softwhite mb-4 ${subtitleFont.className}`}
    >
      {children}
    </h1>
  );
};
