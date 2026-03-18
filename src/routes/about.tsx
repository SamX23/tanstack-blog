import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About Sami Kalammallah</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-foreground sm:text-5xl">
          Qodarullah, I'm a Software Engineer who loves doing Frontend Development.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-muted-foreground">
          I specialize in building performant, scalable web and mobile applications using modern technologies like Next.js, TypeScript, and GraphQL. With a background transitioning from technical support to full-scale software engineering, I bring a unique perspective on user experience and technical problem-solving.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          My experience spans across various industries, where I've delivered digital solutions ranging from ticketing platforms to internal information systems and interactive mapping tools. I am passionate about remote collaboration and working within international environments to make a meaningful impact through technology.
        </p>
      </section>
    </main>
  )
}
