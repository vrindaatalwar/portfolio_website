import React from 'react';
import { Section, Container, SectionHeader } from './Layout';
import { XIcon, GithubIcon, LinkedInIcon, ArrowUpRightIcon } from './Icons';

const SocialRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
}> = ({ icon, label, handle, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 border-b border-border/30 first:border-t-0 last:border-b-0 hover:bg-surface/30 px-3 -mx-3 rounded-lg transition-colors group">
    <div className="flex items-center gap-4">
      <span className="text-text-secondary w-5 h-5 group-hover:text-highlight transition-colors">{icon}</span>
      <span className="text-text-secondary font-mono text-sm tracking-wide group-hover:text-highlight transition-colors">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-text-muted text-sm group-hover:text-highlight transition-colors">{handle}</span>
      <ArrowUpRightIcon className="w-3 h-3 text-text-muted group-hover:text-highlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
    </div>
  </a>
);

const Contact: React.FC = () => {
  return (
    <Section id="contacts">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          title="Contact me"
          subtitle="You can contact me by using any of the links below"
        />

        <div className="w-full border border-border rounded-xl p-6 flex flex-col gap-8 bg-surface/20">
          {/* Form replaced with direct Gmail link */}
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="vrindaat2003@gmail.com"
              readOnly
              className="flex-1 bg-surface border border-border rounded-md px-4 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-text-secondary transition-colors cursor-default"
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vrindaat2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-surface text-text-primary text-xs px-4 py-2 rounded-md border border-border transition-colors whitespace-nowrap flex items-center"
            >
              Send Enquiry
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <SocialRow
              icon={<XIcon />}
              label="X.com"
              handle="@vrndtwr"
              href="https://x.com/vrndtwr"
            />
            <SocialRow
              icon={<GithubIcon />}
              label="GitHub"
              handle="vrindaatalwar"
              href="https://github.com/vrindaatalwar"
            />
            <SocialRow
              icon={<LinkedInIcon />}
              label="LinkedIn"
              handle="/in/vrindaa-talwar"
              href="https://www.linkedin.com/in/vrindaa-talwar"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;