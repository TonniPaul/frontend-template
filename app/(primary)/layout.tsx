import { ReactNode } from 'react';

const PrimaryLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
