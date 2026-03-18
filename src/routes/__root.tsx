import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700">
              Sam's Blog
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-primary-600 transition">
                Home
              </a>
              <a href="/blog" className="text-gray-600 hover:text-primary-600 transition">
                Blog
              </a>
              <a href="/about" className="text-gray-600 hover:text-primary-600 transition">
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Sam Kalammallah. Built with TanStack Start.</p>
        </div>
      </footer>
    </div>
  ),
});
