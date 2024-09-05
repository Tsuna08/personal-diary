import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => (
  <div style={{ flexGrow: 1 }}>{children}</div>
);
