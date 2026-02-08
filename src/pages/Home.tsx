import React from 'react';
import Hero from '../../components/Hero';
import Stack from '../../components/Stack';
import Projects from '../../components/Projects';
import GithubActivity from '../../components/GithubActivity';
import Blogs from '../../components/Blogs';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
    return (
        <main className="flex flex-col pt-32 md:pt-48 pb-0 gap-24 md:gap-32 relative z-10">
            <Hero />
            <Stack />
            <Projects />
            <GithubActivity />
            <Blogs />
            <Contact />
        </main>
    );
};

export default Home;
