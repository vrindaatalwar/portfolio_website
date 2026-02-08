import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Footer from './components/Footer';
import { CustomCursor } from './components/ui/custom-cursor';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary selection:bg-highlight selection:text-white transition-colors duration-300 relative cursor-none">

        <CustomCursor />

        {/* Noise Texture Overlay */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
          }}
        />

        {/* Progressive Top Fade & Blur */}
        <div
          className="fixed top-0 left-0 right-0 h-44 z-40 pointer-events-none bg-gradient-to-b from-background via-background/90 to-transparent backdrop-blur-[6px]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }}
        />

        {/* Progressive Bottom Fade & Blur */}
        <div
          className="fixed bottom-0 left-0 right-0 h-44 z-40 pointer-events-none bg-gradient-to-t from-background via-background/90 to-transparent backdrop-blur-[6px]"
          style={{
            maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)'
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;