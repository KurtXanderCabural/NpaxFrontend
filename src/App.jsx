import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
}