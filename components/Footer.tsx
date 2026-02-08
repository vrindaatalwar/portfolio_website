import React from 'react';
import { Container } from './Layout';
import { StarIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-4 pb-20 md:pb-28">
      <Container className="flex flex-col gap-4">
        {/* Signature image (smaller footprint) */}
        <div className="w-full flex items-start">
          <div className="h-24 md:h-32 lg:h-40 max-w-md overflow-hidden">
            <img
              src="https://framerusercontent.com/images/CQ49duAlFHzUQOeEIIOB8Y7QMls.png"
              alt="Vrindaa signature"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-text-secondary font-medium">
          <p>That's all Folks! Designed and developed with love by Vrindaa</p>
          <p>All rights reserved</p>
          <a
            href="https://github.com/vrindaatalwar/portfolio_website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 mt-4 w-fit rounded-full border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-text-muted/50 transition-all duration-300 group"
          >
            <StarIcon className="w-4 h-4 text-text-muted group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors duration-300" />
            <span className="text-xs sm:text-sm font-medium">Star this project</span>
          </a>

          <p className="font-mono text-text-tertiary mt-2">git commit -m "bye"</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;