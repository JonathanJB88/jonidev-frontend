import { ReactNode } from 'react';
import { subtitleFont } from '@/config';

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => {
  return (
    <h1 className={`text-softwhite mb-4 ${subtitleFont.className}`}>
      {children}
    </h1>
  );
};
