import { Routes, Route, BrowserRouter, StaticRouter } from 'react-router';

import { HomePage, PrivacyPage, TermsPage } from '@/pages';
import useIsMounted from '@/hooks/useIsMount';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
};

const RootRouter = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <StaticRouter location={'/'}>
        <Router />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default RootRouter;
