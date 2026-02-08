import React, { useState } from 'react';
import { Section, Container, SectionHeader } from './Layout';
import { ChevronDownIcon } from './Icons';
import { Tooltip } from './ui/tooltip-card';

interface Project {
  name: string;
  description: string;
  details: string;
  tags: string[];
  image: string; // Added image field
}

const projects: Project[] = Array(5).fill({
  name: 'Project Name',
  description: 'One line description',
  details: 'This is a detailed description of the project that expands when clicked. It provides more context about the challenges faced, the technologies utilized, and the impact of the solution. The goal is to build meaningful digital experiences that are not only functional but also accessible and visually appealing.',
  tags: ['React', 'Tailwind', 'Next JS', 'Go'],
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' // Placeholder image
});

const ProjectPreview: React.FC<{ image: string; name: string }> = ({ image, name }) => (
  <div className="flex flex-col gap-2 w-80">
    <img
      src={image}
      alt={name}
      className="aspect-video w-full rounded-sm object-cover"
    />
  </div>
);

const ProjectRow: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="group flex flex-col py-4 border-b border-border/40 cursor-pointer transition-colors"
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 items-start">
            <Tooltip
              content={<ProjectPreview image={project.image} name={project.name} />}
              containerClassName="inline-block"
            >
              <h3 className="text-base font-medium text-text-primary transition-colors hover:text-highlight inline-block">{project.name}</h3>
            </Tooltip>
            <p className="text-sm text-text-secondary">{project.description}</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 border border-text-muted/40 rounded-md text-xs font-medium text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-1">
          <ChevronDownIcon
            className={`w-4 h-4 text-text-muted group-hover:text-highlight transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.details}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          title="Work"
          count={5}
          subtitle="Some design projects I have crafted"
        />

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectRow key={i} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;