import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application with real-time features, authentication, and a responsive dashboard.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    demo: "https://example.com",
    github: "https://github.com",
    image: null,
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with cart management, payment integration, and order tracking.",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    demo: "https://example.com",
    github: "https://github.com",
    image: null,
  },
  {
    title: "Project Three",
    description:
      "A real-time chat application with group messaging, file sharing, and notifications.",
    tech: ["React", "Socket.io", "Express", "Redis"],
    demo: null,
    github: "https://github.com",
    image: null,
  },
  {
    title: "Project Four",
    description:
      "A task management tool with drag-and-drop boards, collaboration features, and analytics.",
    tech: ["Vue.js", "Firebase", "Vuetify"],
    demo: "https://example.com",
    github: "https://github.com",
    image: null,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Here are some of the projects I've worked on. Each one taught me
            something new.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Thumbnail */}
                <div className="aspect-video bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
