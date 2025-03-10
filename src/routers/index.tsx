import { HomePage, PrivacyPage, TermsPage } from '@/pages';
import { Routes, Route } from 'react-router';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
};

export default RootRouter;
