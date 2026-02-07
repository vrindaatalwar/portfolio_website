import React from 'react';
import { Container } from './Layout';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 mt-8">
      <Container className="flex flex-col gap-6">
        {/* Signature Placeholder */}
        <div className="w-48 h-24 flex items-center">
             <span className="font-signature text-6xl text-text-muted opacity-60 transform -rotate-6">
                 Vrindaa
             </span>
             {/* Simple SVG squiggle to act as signature line extension */}
             <svg width="60" height="20" viewBox="0 0 100 20" className="opacity-50 stroke-text-muted fill-none ml-2 mt-4">
                 <path d="M0,10 Q20,20 40,10 T80,10" strokeWidth="2" />
             </svg>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-text-primary font-medium">
            <p>That's all Folks! Designed and developed with love by Vrindaa</p>
            <p className="text-text-secondary">All rights reserved</p>
            <p className="font-mono text-text-muted mt-2">git commit -m "bye"</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;