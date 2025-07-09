import { HomePage, PrivacyPage, TermsPage } from '@/pages';
import { Routes, Route, BrowserRouter, StaticRouter } from 'react-router';

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
  if (typeof window !== 'undefined') {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }

  return (
    <StaticRouter location={'/'}>
      <Router />
    </StaticRouter>
  );
};

export default RootRouter;
