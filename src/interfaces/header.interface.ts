import { ReactNode } from 'react';

export interface HeaderOptions {
  node: ReactNode | string;
  href: string;
  mobileHidden?: boolean;
}
