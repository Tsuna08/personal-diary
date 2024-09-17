import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => <article style={{ flexGrow: 1 }}>{children}</article>;
