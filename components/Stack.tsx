import React from 'react';
import { Section, Container, SectionHeader } from './Layout';
import { Logos3 } from './blocks/logos3';

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
  // Duplicate the logos to ensure there are enough items for a seamless loop
  // Using flatMap with index to generate unique IDs
  const formattedLogos = Array.from({ length: 4 }).flatMap((_, index) =>
    stackItems.map(item => ({
      id: `${item.id}-${index}`,
      description: item.name,
      image: item.image,
      className: `h-12 w-auto object-contain ${item.className || ''}`
    }))
  );

  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <SectionHeader
          title="Stack I use"
          subtitle="Technologies I work with to build products and solve real-life problems"
        />

        <Logos3
          heading=""
          logos={formattedLogos}
        />
      </Container>
    </Section>
  );
};

export default Stack;