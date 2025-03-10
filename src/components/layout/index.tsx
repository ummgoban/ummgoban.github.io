import { Footer, Header } from '@/components/common';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
