import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import Education from './pages/Education';

// Placeholder content for simple pages
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl font-display font-bold text-white mb-4">{title}</h1>
    <p className="text-gray-400">Content coming soon.</p>
  </div>
);

const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-colestia-bg text-white selection:bg-colestia-gold selection:text-black">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/education" element={<Education />} />
          <Route path="/team" element={<Team />} />

          {/* Placeholders for secondary links */}
          <Route path="/service" element={<PlaceholderPage title="Services" />} />
          <Route path="/news" element={<PlaceholderPage title="News & Updates" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
