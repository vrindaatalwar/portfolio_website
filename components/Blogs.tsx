import React from 'react';
import { Section, Container, SectionHeader } from './Layout';
import { ArrowUpRightIcon } from './Icons';
import { BLOGS } from '../src/data/blogs';
import { Link } from 'react-router-dom';

const BlogRow: React.FC<{ title: string; id: string; date: string }> = ({ title, id, date }) => (
  <Link to={`/blog/${id}`} className="group flex items-center justify-between py-5 border-b border-border/40 hover:border-border transition-colors">
    <div className="flex flex-col gap-1">
      <span className="text-text-primary font-medium group-hover:text-highlight transition-colors">{title}</span>
      <span className="text-xs text-text-truncated">{date}</span>
    </div>
    <ArrowUpRightIcon className="w-4 h-4 text-text-muted group-hover:text-highlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
  </Link>
);

const Blogs: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <SectionHeader
          title="Blogs"
          count={BLOGS.length}
          subtitle="Here are some blogs that I have curated"
        />

        <div className="flex flex-col">
          {BLOGS.map((blog) => (
            <BlogRow key={blog.id} title={blog.title} id={blog.id} date={blog.date} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;