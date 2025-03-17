import { BrowserRouter } from 'react-router';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter basename={import.meta.env.PUBLIC_URL}>{children}</BrowserRouter>;
};

export default RootProvider;
