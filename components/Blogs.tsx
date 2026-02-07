import React from 'react';
import { Section, Container, SectionHeader } from './Layout';
import { ArrowUpRightIcon } from './Icons';

const BlogRow: React.FC<{ title: string }> = ({ title }) => (
  <a href="#" className="group flex items-center justify-between py-5 border-b border-border/40 hover:border-border transition-colors">
    <span className="text-text-primary font-medium group-hover:text-highlight transition-colors">{title}</span>
    <ArrowUpRightIcon className="w-4 h-4 text-text-muted group-hover:text-highlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
  </a>
);

const Blogs: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <SectionHeader 
          title="Blogs" 
          count={5}
          subtitle="Here are some blogs that I have curated" 
        />
        
        <div className="flex flex-col">
            <BlogRow title="Blog 1" />
            <BlogRow title="Blog 1" />
            <BlogRow title="Blog 1" />
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;