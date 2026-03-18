import { useMemo } from 'react'
import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations, allProjects } from 'content-collections'
import { Badge } from '#/components/ui/badge'
import { Separator } from '#/components/ui/separator'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { professionalJobs, volunteerJobs } = useMemo(() => {
    const sorted = [...allJobs].sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    })
    
    return {
      professionalJobs: sorted.filter(job => !job.jobTitle.toLowerCase().includes('volunteer')),
      volunteerJobs: sorted.filter(job => job.jobTitle.toLowerCase().includes('volunteer'))
    }
  }, [])

  const sortedProjects = useMemo(() => {
    return [...allProjects].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [])

  const sortedEducation = useMemo(() => {
    return [...allEducations].sort((a, b) => {
      const dateA = a.endDate ? new Date(a.endDate).getTime() : new Date(a.startDate).getTime()
      const dateB = b.endDate ? new Date(b.endDate).getTime() : new Date(b.startDate).getTime()
      return dateB - dateA
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3FC1C9] to-[#FC5185] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Sami Kalammallah"
                className="relative w-32 h-32 rounded-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border-2 border-background"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Sami Kalammallah
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed">
              Software Engineer specializing in <span className="text-primary">Frontend</span> & <span className="text-primary">Cross-Platform</span> development.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4 text-sm font-semibold">
             <a href="https://github.com/SamX23" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#FC5185] transition-colors flex items-center gap-2">
               GitHub
             </a>
             <a href="https://www.linkedin.com/in/samikalammallah/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#3FC1C9] transition-colors flex items-center gap-2">
               LinkedIn
             </a>
             <a href="https://twitter.com/samikalammallah" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#FC5185] transition-colors flex items-center gap-2">
               Twitter
             </a>
             <a href="mailto:skalexsong@gmail.com" className="text-muted-foreground hover:text-[#3FC1C9] transition-colors flex items-center gap-2">
               Email
             </a>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
            <p className="text-muted-foreground">My professional journey in software engineering.</p>
          </div>
          <div className="space-y-12">
            {professionalJobs.map((job) => (
              <div key={job.company + job.jobTitle} className="group relative pl-8 border-l-2 border-muted hover:border-primary transition-colors">
                <div className="absolute w-3 h-3 bg-muted group-hover:bg-primary rounded-full -left-[7px] top-1.5 transition-colors shadow-sm" />
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{job.jobTitle}</h3>
                    <span className="text-sm font-bold px-2 py-1 bg-muted rounded text-muted-foreground whitespace-nowrap">
                      {job.startDate} — {job.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-foreground/80">{job.company}</div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">{job.location}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {job.summary}
                  </p>
                  {job.content && (
                    <div
                      className="text-muted-foreground prose prose-sm max-w-none prose-p:leading-relaxed prose-li:marker:text-primary"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content),
                      }}
                    />
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags?.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer & Contributions */}
        {volunteerJobs.length > 0 && (
          <section className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Volunteer & Community</h2>
              <p className="text-muted-foreground">Giving back to the community through technology.</p>
            </div>
            <div className="grid gap-6">
              {volunteerJobs.map((job) => (
                <div key={job.company + job.jobTitle} className="p-6 rounded-2xl border-2 border-muted hover:border-[#3FC1C9]/30 hover:bg-muted/30 transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <h3 className="text-lg font-bold text-foreground">{job.jobTitle}</h3>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{job.startDate} — {job.endDate || 'Present'}</span>
                  </div>
                  <div className="text-md font-semibold text-[#3FC1C9]">{job.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags?.map((tag) => (
                      <Badge key={tag} className="bg-[#3FC1C9]/10 text-[#3FC1C9] hover:bg-[#3FC1C9]/20 border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {sortedProjects.length > 0 && (
          <section className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Selected Projects</h2>
              <p className="text-muted-foreground">Key projects and technical explorations.</p>
            </div>
            <div className="grid gap-8">
              {sortedProjects.map((project) => (
                <div key={project.title} className="group p-8 rounded-3xl bg-muted/20 border border-border hover:border-[#FC5185]/30 transition-all space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#FC5185] transition-colors">{project.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <Badge key={tag} className="bg-[#FC5185]/10 text-[#FC5185] border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        <section className="space-y-10 pb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Education</h2>
            <p className="text-muted-foreground">Academic background and continuous learning.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {sortedEducation.map((edu) => (
              <div key={edu.school} className="space-y-3 p-6 rounded-2xl bg-muted/10 border border-transparent hover:border-muted transition-all">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground leading-tight">{edu.school}</h3>
                  <div className="text-sm font-medium text-primary">{edu.startDate} {edu.endDate ? `— ${edu.endDate}` : ''}</div>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{edu.location}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
