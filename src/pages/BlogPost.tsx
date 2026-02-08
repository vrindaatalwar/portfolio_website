import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import { ArrowLeftIcon } from '../../components/Icons'; // Assuming you have an arrow icon, loosely based on ArrowUpRight
import { Container } from '../../components/Layout';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = BLOGS.find((b) => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <Container className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Blog not found</h1>
                <button onClick={() => navigate('/')} className="text-highlight hover:underline">
                    Go back home
                </button>
            </Container>
        );
    }

    return (
        <article className="min-h-screen bg-background pt-32 pb-20">
            <Container className="max-w-3xl">
                {/* Back Link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-12 group"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:-translate-x-1 transition-transform"
                    >
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Back
                </Link>

                {/* Header */}
                <header className="flex flex-col gap-6 mb-12">
                    <div className="aspect-[2/1] w-full bg-surface rounded-2xl overflow-hidden shadow-sm border border-border/40">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-3 text-sm text-text-muted font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-highlight to-purple-500"></div>
                                <span className="text-text-primary">Vrindaa</span>
                            </div>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-text-secondary prose-p:leading-relaxed prose-code:text-highlight prose-code:bg-surface/50 prose-code:px-1 prose-code:rounded prose-pre:bg-surface prose-pre:border prose-pre:border-border/40">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </Container>
        </article>
    );
};

export default BlogPost;
