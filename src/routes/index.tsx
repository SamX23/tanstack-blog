import { useMemo } from 'react'
import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { Separator } from '#/components/ui/separator'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const sortedJobs = useMemo(() => {
    return [...allJobs].sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <img
              src="/headshot-on-white.jpg"
              alt="Sami Kalammallah"
              className="w-32 h-32 rounded-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Sami Kalammallah
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Software Engineer specializing in Frontend
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-xl mx-auto">
            I build performant, scalable web applications with a focus on modern 
            JavaScript ecosystems like React, Next.js, and GraphQL.
          </p>
          <div className="flex justify-center gap-4 pt-4">
             <a href="https://github.com/SamX23" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-foreground transition-colors">
               GitHub
             </a>
             <a href="https://www.linkedin.com/in/samikalammallah/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-foreground transition-colors">
               LinkedIn
             </a>
          </div>
        </section>

        <Separator />

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="space-y-12">
            {sortedJobs.map((job) => (
              <div key={job.company + job.jobTitle} className="relative pl-8 border-l border-border">
                <div className="absolute w-2.5 h-2.5 bg-muted rounded-full -left-[5.5px] top-1.5" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="text-lg font-bold text-foreground">{job.jobTitle}</h3>
                    <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                      {job.startDate} — {job.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="text-primary font-medium">{job.company}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground border-none font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="mt-4 text-muted-foreground prose prose-sm max-w-none prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content),
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
          <div className="space-y-8">
            {allEducations.map((edu) => (
              <div key={edu.school} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                  <span className="text-sm text-gray-400 font-medium">{edu.startDate}</span>
                </div>
                <p className="text-muted-foreground italic">{edu.location}</p>
                <p className="text-muted-foreground leading-relaxed">{edu.summary}</p>
                {edu.content && (
                  <div
                    className="mt-4 text-muted-foreground prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: marked(edu.content),
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
