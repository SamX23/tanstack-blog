import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
      
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Hey! I'm <strong>Sam Kalammallah</strong>, a Software Engineer based in Indonesia.
          I specialize in building modern web applications with React, TypeScript, and Node.js.
        </p>
        
        <p>
          Currently working at <strong>Mazecare</strong>, where I focus on healthcare platforms
          and developer tooling. Passionate about AI agents, full-stack development, and
          open source.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend: React, Next.js, TanStack, TypeScript</li>
          <li>Backend: Node.js, GraphQL, REST APIs</li>
          <li>Mobile: Capacitor, React Native</li>
          <li>DevOps: Cloudflare, Vercel, GitHub Actions</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8">What I Write About</h2>
        <p>
          This blog is where I share learnings, tutorials, and thoughts on:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Modern web development (React, TypeScript, full-stack)</li>
          <li>AI agents and autonomous workflows</li>
          <li>Developer experience and tooling</li>
          <li>Healthcare tech and MHDC projects</li>
        </ul>
        
        <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <p className="text-primary-800">
            <strong>Want to connect?</strong> Find me on{" "}
            <a href="https://github.com/SamX23" className="underline hover:text-primary-600">
              GitHub
            </a>{" "}
            or reach out via email.
          </p>
        </div>
      </div>
    </div>
  );
}
