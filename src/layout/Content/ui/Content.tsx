import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div style={{ flexGrow: 1 }}>{children}</div>;
};

export default Content;
