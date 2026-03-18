import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 backdrop-blur-lg">
      <nav className="max-w-3xl mx-auto flex flex-wrap items-center justify-between py-3 sm:py-4 gap-4">
        <h2 className="m-0 flex-shrink-0 text-base font-bold tracking-tight">
          <Link
            to="/"
            aria-label="Sami Kalammallah - Home"
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-sm text-foreground no-underline transition-all hover:bg-muted active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3FC1C9] to-[#FC5185] shadow-[0_0_8px_rgba(63,193,201,0.5)]" />
            Sami Kalammallah
          </Link>
        </h2>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            to="/"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            activeProps={{ className: 'text-foreground font-bold' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            activeProps={{ className: 'text-foreground font-bold' }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            activeProps={{ className: 'text-foreground font-bold' }}
          >
            Projects
          </Link>
          <div className="ml-1 pl-1 border-l border-border h-4" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
