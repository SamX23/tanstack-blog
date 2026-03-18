import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const skills = [
    { category: 'Frontend', items: ['TypeScript', 'React', 'Vue', 'Next.js', 'Nuxt.js', 'GraphQL', 'Tailwind CSS', 'Sass', 'jQuery'] },
    { category: 'Mobile & Cross-Platform', items: ['Cross-platform development', 'App Store & Play Store deployment'] },
    { category: 'Backend & DevOps', items: ['Docker', 'Jenkins (CI/CD)', 'Firebase (Auth, FCM)', 'PostgreSQL'] },
    { category: 'Tools', items: ['Figma', 'Google Analytics', 'Leaflet'] },
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Me
        </h1>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a <strong>Software Engineer</strong> specializing in <strong>Frontend & Cross-Platform Development</strong>. 
            My passion lies in building performant, scalable web and mobile applications using modern technologies 
            like <strong>Next.js, TypeScript, and GraphQL</strong>.
          </p>
          <p>
            With a background transitioning from technical support to full-scale software engineering, 
            I bring a unique perspective on user experience and technical problem-solving. 
            I have extensive experience in remote collaboration, having worked with international teams 
            across India, France, Philippines, and Hong Kong.
          </p>
          <p>
            I am passionate about remote collaboration and working within international environments 
            to make a meaningful impact through technology.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-foreground">Skills & Technologies</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-3">
              <h3 className="font-semibold text-foreground">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground border-none font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>Email: <a href="mailto:skalexsong@gmail.com" className="text-primary hover:underline">skalexsong@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/6289657511134" target="_blank" rel="noreferrer" className="text-primary hover:underline">+62 896-5751-1134</a></p>
          <div className="flex gap-4 pt-2">
             <a href="https://github.com/SamX23" target="_blank" rel="noreferrer" className="text-primary hover:underline">
               GitHub
             </a>
             <a href="https://www.linkedin.com/in/samikalammallah/" target="_blank" rel="noreferrer" className="text-primary hover:underline">
               LinkedIn
             </a>
             <a href="https://twitter.com/samikalammallah" target="_blank" rel="noreferrer" className="text-primary hover:underline">
               Twitter
             </a>
          </div>
        </div>
      </section>
    </main>
  )
}
