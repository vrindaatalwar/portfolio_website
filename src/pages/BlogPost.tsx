import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import { ArrowLeftIcon, ArrowUpRightIcon } from '../../components/Icons';
import { Container } from '../../components/Layout';

const BlogRow: React.FC<{ title: string; id: string; date: string }> = ({ title, id, date }) => (
    <Link to={`/blog/${id}`} className="group flex items-center justify-between py-5 border-b border-border/40 hover:border-border transition-all duration-300 ease-out">
        <div className="flex flex-col gap-1">
            <span className="text-text-primary font-medium group-hover:text-highlight transition-all duration-300 ease-out">{title}</span>
            <span className="text-xs text-text-truncated">{date}</span>
        </div>
        <ArrowUpRightIcon className="w-4 h-4 text-text-muted group-hover:text-highlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
    </Link>
);

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

    // Recommended blogs logic: find up to 3 other blogs
    const recommendedBlogs = BLOGS.filter(b => b.id !== id).slice(0, 3);

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
                <div className="prose prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-text-secondary prose-p:leading-relaxed prose-code:text-highlight prose-code:bg-surface/50 prose-code:px-1 prose-code:rounded prose-pre:bg-surface prose-pre:border prose-pre:border-border/40 mb-20">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Recommendations */}
                {recommendedBlogs.length > 0 && (
                    <div className="pt-12 border-t border-border/40">
                        <h2 className="text-xl font-bold text-text-primary mb-6">More like this</h2>
                        <div className="flex flex-col">
                            {recommendedBlogs.map(blog => (
                                <BlogRow key={blog.id} title={blog.title} id={blog.id} date={blog.date} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </article>
    );
};

export default BlogPost;
