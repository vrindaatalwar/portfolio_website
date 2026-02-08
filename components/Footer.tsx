import React from 'react';
import { Container } from './Layout';

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
          <p className="font-mono text-text-tertiary mt-2 mb-4">git commit -m "bye"</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;