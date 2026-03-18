import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const topProjects = [
    {
      title: "Satu Usaha Muda Publisher",
      description: "A professional digital presence for a book publishing house. Features a curated book catalog, author showcases, and a streamlined interface to browse and acquire publications.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/SamX23/book-publisher-site",
      live: "https://www.satuusahamuda.web.id/",
      status: "Production",
      type: "Volunteering"
    },
    {
      title: "Member Cash App",
      description: "A comprehensive member database and fee tracking application. Features specialized logic for managing member contributions, calculating outstanding fees, and providing a clean administrative interface.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      link: "https://github.com/SamX23/member-cash-app",
      live: "https://v0-member-cash-app.vercel.app/",
      status: "Production",
      type: "Volunteering"
    },
    {
      title: "Rumah Mulia Portfolio",
      description: "A professional and elegant landing page designed for a writer's personal brand. Focuses on content hierarchy, typography, and a seamless reading experience to showcase creative work.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/SamX23/v0-rumah-mulia-portfolio",
      live: "https://rumah-mulia.vercel.app/",
      status: "Active",
      type: "Pro-bono"
    },
    {
      title: "Warung Bu Nanay",
      description: "A localized e-commerce solution for a small business. Includes a product catalog with a direct WhatsApp ordering integration, allowing customers to send their cart directly to the seller.",
      tech: ["React", "WhatsApp API", "Tailwind CSS"],
      link: "https://github.com/SamX23/food-order-app",
      live: "https://warung-bu-nanay.vercel.app/",
      status: "Live",
      type: "Pro-bono"
    },
    {
      title: "Online Receipt Generator",
      description: "A lightweight utility for local organizations to generate professional digital receipts instantly. Simplifies the process of tracking payments and issuing proof of transactions.",
      tech: ["Cloudflare Workers", "Hono", "React"],
      link: "https://github.com/SamX23/kwitansi-online-generator",
      live: "https://tanda-terima-generator.skalexsong.workers.dev/",
      status: "Deployed",
      type: "Volunteering"
    },
    {
      title: "TanStack Blog",
      description: "My personal portfolio and blog built with TanStack Start, React 19, and Tailwind CSS v4. Features modern SEO, theme switching, and high performance.",
      tech: ["React 19", "TanStack Start", "Tailwind CSS v4"],
      link: "https://github.com/SamX23/tanstack-blog",
      status: "Active",
      type: "Personal"
    }
  ]

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Volunteering':
        return 'bg-[#3FC1C9]/10 text-[#3FC1C9] border-[#3FC1C9]/20';
      case 'Pro-bono':
        return 'bg-[#FC5185]/10 text-[#FC5185] border-[#FC5185]/20';
      case 'Personal':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Top Projects
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A collection of my favorite work, ranging from professional platforms to indie developer tools and localized digital solutions.
        </p>
      </header>

      <div className="grid gap-10">
        {topProjects.map((project) => (
          <div key={project.title} className="group relative p-8 rounded-3xl bg-muted/20 border border-border hover:border-primary/30 transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={`font-semibold px-2 py-0 text-[10px] uppercase tracking-wider ${getTypeStyle(project.type)}`}>
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className="border-border text-muted-foreground font-medium px-2 py-0 text-[10px] uppercase tracking-wider">
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} className="bg-muted/50 text-muted-foreground border-none font-medium">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-6 pt-2">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center text-sm font-bold text-foreground hover:text-[#3FC1C9] transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="p-8 rounded-3xl bg-[#3FC1C9]/5 border border-[#3FC1C9]/20">
        <p className="text-[#3FC1C9] font-bold text-center">
          More projects are constantly being developed. Check my 
          <a href="https://github.com/SamX23" className="underline ml-1 hover:text-[#FC5185]">GitHub profile</a> for more.
        </p>
      </section>
    </main>
  )
}
