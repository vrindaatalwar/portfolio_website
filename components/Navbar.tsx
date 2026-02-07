import React from 'react';
import { Container } from './Layout';
import { SunIcon, MoonIcon } from './Icons';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="w-full py-8 text-sm font-medium text-text-primary">
      <Container className="flex items-center justify-between">
        <div className="text-text-primary font-semibold mt-1">Hello World!</div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-highlight transition-colors">About</a>
          <a href="#projects" className="hover:text-highlight transition-colors">Projects</a>
          <a href="#contacts" className="hover:text-highlight transition-colors">Contacts</a>
          <a href="#timepass" className="hover:text-highlight transition-colors">Timepass</a>
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme" 
            className="hover:text-highlight transition-colors focus:outline-none flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;