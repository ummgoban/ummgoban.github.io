import { BrowserRouter } from 'react-router';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RootProvider;
