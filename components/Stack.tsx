import React from 'react';
import { Section, Container, SectionHeader } from './Layout';

interface StackItem {
  id: string;
  name: string;
  image: string;
  className?: string;
}

const stackItems: StackItem[] = [
  {
    id: "js",
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    className: "" 
  },
  {
    id: "java",
    name: "Java",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    className: ""
  },
  {
    id: "python",
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    className: ""
  },
  {
    id: "react",
    name: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    className: ""
  },
  {
    id: "next",
    name: "Next.js",
    image: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", 
    className: ""
  },
  {
    id: "express",
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    className: "invert"
  },
   {
    id: "sql",
    name: "SQL",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    className: ""
  },
];

const Stack: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <SectionHeader 
          title="Stack I use" 
          subtitle="Technologies I work with to build products and solve real-life problems" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stackItems.map((item) => (
             <div 
               key={item.id} 
               className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors cursor-default"
             >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 shadow-sm">
                   <img 
                     src={item.image} 
                     alt={item.name} 
                     className={`w-6 h-6 object-contain ${item.className || ''}`} 
                     loading="lazy"
                   />
                </div>
                <span className="text-[15px] font-medium text-text-primary group-hover:text-white transition-colors">
                  {item.name}
                </span>
             </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Stack;