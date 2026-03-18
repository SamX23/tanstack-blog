import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-primary-600">Sam</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Software Engineer building modern web experiences. Sharing thoughts on React,
          TypeScript, and full-stack development.
        </p>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <BlogPostCard
            title="Getting Started with TanStack Start"
            excerpt="Learn how to build full-stack React apps with TanStack Start v2..."
            date="March 18, 2026"
            slug="getting-started-tanstack-start"
          />
          <BlogPostCard
            title="WebAssembly for Web Developers"
            excerpt="Understanding WASM and when to use it in your projects..."
            date="March 15, 2026"
            slug="webassembly-for-web-devs"
          />
          <BlogPostCard
            title="Next.js vs TanStack Start"
            excerpt="Comparing two modern full-stack React frameworks..."
            date="March 10, 2026"
            slug="nextjs-vs-tanstack"
          />
          <BlogPostCard
            title="TypeScript Best Practices 2026"
            excerpt="Level up your TypeScript skills with these patterns..."
            date="March 5, 2026"
            slug="typescript-best-practices"
          />
        </div>
      </section>
    </div>
  );
}

function BlogPostCard({ title, excerpt, date, slug }: { title: string; excerpt: string; date: string; slug: string }) {
  return (
    <a
      href={`/blog/${slug}`}
      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </a>
  );
}
