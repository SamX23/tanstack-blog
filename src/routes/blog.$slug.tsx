import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

const posts: Record<string, { title: string; date: string; content: string }> = {
  "getting-started-tanstack-start": {
    title: "Getting Started with TanStack Start",
    date: "March 18, 2026",
    content: `
## Introduction

TanStack Start v2 is a full-stack React framework that brings together the best of modern web development...

## Setup

\`\`\`bash
npm create @tanstack/start@latest
cd your-app
npm install
npm run dev
\`\`\`

## Key Features

- **File-based routing** - Routes defined by file structure
- **End-to-end type safety** - Full TypeScript support
- **SSR & Streaming** - Server-side rendering out of the box
- **Server Functions** - Write server logic that's callable from client

## Conclusion

TanStack Start is perfect for developers who want a type-safe, modern full-stack experience.
    `,
  },
  "webassembly-for-web-devs": {
    title: "WebAssembly for Web Developers",
    date: "March 15, 2026",
    content: `
## What is WebAssembly?

WebAssembly (WASM) is a binary instruction format that runs in browsers at near-native speed...

## When to Use WASM

- Image/video processing
- Cryptography
- Games and visualizations
- Client-side search engines

## When NOT to Use WASM

- Simple CRUD apps
- Basic UI interactions
- Content-heavy blogs

## Example: Image Optimization

\`\`\`rust
// Rust code compiled to WASM
pub fn optimize_image(data: &[u8]) -> Vec<u8> {
    // Fast image processing
}
\`\`\`

## Conclusion

WASM augments JavaScript for performance-critical tasks, not replaces it.
    `,
  },
};

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <a href="/blog" className="text-primary-600 hover:underline mt-4 inline-block">
          ← Back to Blog
        </a>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <a href="/blog" className="text-primary-600 hover:underline text-sm">
          ← Back to Blog
        </a>
        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
      </header>

      <div className="prose prose-lg max-w-none">
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {post.content.trim().split("\n").map((paragraph, i) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={i} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("```")) {
              return null;
            }
            if (paragraph.trim() && !paragraph.startsWith("```")) {
              return <p key={i} className="mb-4">{paragraph}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
