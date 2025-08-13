import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import PrestationPage from './pages/prestation';
import SolarThermiquePage from './pages/solairthermique';
import RealizationsPage from './pages/realisations';
import GalleryPage from './pages/galerie';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/prestations" element={<PrestationPage />} />
        <Route path="/solaire-thermique" element={<SolarThermiquePage />} />
        <Route path="/realisations" element={<RealizationsPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
