import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogIndexPage,
});

const posts = [
  {
    slug: "getting-started-tanstack-start",
    title: "Getting Started with TanStack Start",
    excerpt: "Learn how to build full-stack React apps with TanStack Start v2, featuring file-based routing, SSR, and end-to-end type safety.",
    date: "2026-03-18",
    readTime: "8 min read",
  },
  {
    slug: "webassembly-for-web-devs",
    title: "WebAssembly for Web Developers",
    excerpt: "Understanding WASM, when to use it, and practical examples for performance-critical web features.",
    date: "2026-03-15",
    readTime: "10 min read",
  },
  {
    slug: "nextjs-vs-tanstack",
    title: "Next.js vs TanStack Start",
    excerpt: "A deep dive comparing two modern full-stack React frameworks for building production apps.",
    date: "2026-03-10",
    readTime: "12 min read",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices 2026",
    excerpt: "Level up your TypeScript skills with advanced patterns, utility types, and real-world examples.",
    date: "2026-03-05",
    readTime: "15 min read",
  },
];

function BlogIndexPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and learnings on modern web development.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogPostListItem({ post }: { post: typeof posts[0] }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.excerpt}</p>
    </a>
  );
}
