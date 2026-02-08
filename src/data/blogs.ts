export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    content: string; // HTML string for now
}

const LOREM_IPSUM = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h3>Step 1: Lorem Ipsum Dolor</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<pre><code>// Example code block
const lorem = "ipsum";
console.log(lorem);</code></pre>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
`;

export const BLOGS: BlogPost[] = [
    {
        id: "optimize-nextjs",
        title: "How to optimize Next.js apps",
        excerpt: "Learn the best practices for optimizing your Next.js applications for speed and performance.",
        date: "Feb 08, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1618477247222-ac5913054e8e?q=80&w=2574&auto=format&fit=crop",
        content: LOREM_IPSUM
    },
    {
        id: "react-server-components",
        title: "Understanding React Server Components",
        excerpt: "A deep dive into RFCs and how they change the way we build React applications.",
        date: "Jan 15, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
        content: LOREM_IPSUM
    },
    {
        id: "tailwind-tricks",
        title: "5 Tailwind CSS Tricks You Should Know",
        excerpt: "Boost your productivity with these advanced Tailwind CSS techniques.",
        date: "Dec 20, 2025",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
        content: LOREM_IPSUM
    },
    {
        id: "typescript-generics",
        title: "Mastering TypeScript Generics",
        excerpt: "Everything you need to know about Generics to write reusable and type-safe code.",
        date: "Nov 30, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2628&auto=format&fit=crop",
        content: LOREM_IPSUM
    },
    {
        id: "framer-motion-guide",
        title: "Animations with Framer Motion",
        excerpt: "Create stunning animations in React with the Framer Motion library.",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        content: LOREM_IPSUM
    }
];
