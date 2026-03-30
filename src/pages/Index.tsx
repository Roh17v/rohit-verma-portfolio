import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  Layers,
  Rocket,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const profileImageUrl =
  "https://pub-29ef6d2e2baf4fc69ef0a27fadcb8ff8.r2.dev/chat-files/ae1f73e8-ae9d-49d8-99d7-02b08fea7de0.jpg";

const timelineItems = [
  {
    period: "2021 - 2025",
    title: "B.Tech in Computer Science Engineering",
    description:
      "Built a strong foundation in algorithms, data structures, software engineering, and problem solving during my undergraduate journey.",
    icon: GraduationCap,
  },
  {
    period: "2025 - Present",
    title: "Software Engineer",
    description:
      "Working on full-stack products with a stronger focus on backend systems, scalable APIs, and reliable user experiences.",
    icon: Briefcase,
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "REST APIs",
  "Spring Boot",
  "Redis",
  "MongoDB",
  "PostgreSQL",
  "Authentication",
  "Docker",
  "Tailwind CSS",
  "Git",
];

const Index = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 text-center md:text-left">
              <AnimatedSection>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I&apos;m <span className="text-primary">Rohit Verma</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
                  Software Engineer
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground mx-auto md:mx-0">
                  A passionate software engineer who loves building clean,
                  performant web applications. Currently crafting great user
                  experiences and scalable systems.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <Button size="lg" asChild>
                    <Link to="/projects">
                      View Projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mt-10 flex items-center justify-center gap-5 md:justify-start">
                  <a
                    href="https://github.com/Roh17v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/r04hitverma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:rohit.verma272727@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/R04hit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="LeetCode"
                  >
                    <Code2 className="h-5 w-5" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="flex-shrink-0">
              <div className="relative">
                <div className="h-56 w-48 overflow-hidden rounded-3xl border-2 border-primary/20 bg-muted shadow-xl sm:h-72 sm:w-60 md:h-80 md:w-64 lg:h-[26rem] lg:w-80 xl:h-[28rem] xl:w-[22rem]">
                  <img
                    src={profileImageUrl}
                    alt="Portrait of Rohit Verma"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A little about myself
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="grid h-full grid-rows-[auto_auto_auto] gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <Layers className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-display text-lg font-bold text-foreground">
                      Full Stack
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Building across frontend and backend
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <Rocket className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-display text-lg font-bold text-foreground">
                      Backend Focus
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Growing deeper in APIs and systems
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <p className="font-display text-sm font-semibold text-foreground">
                      Core Stack
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-display text-lg font-bold text-foreground">
                      Mobile Dev
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Experience building app interfaces
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-display text-lg font-bold text-foreground">
                      1+ Year
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Professional experience
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full flex-col justify-center">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a full stack developer with a stronger lean toward
                  backend engineering. My journey in tech began during my B.Tech
                  in Computer Science, where I discovered my passion for
                  building robust systems and scalable APIs.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  On the backend, I work with Node.js, databases, and cloud
                  infrastructure to build reliable services. I also bring ideas
                  to life on the frontend with React and have hands-on
                  experience in mobile development, giving me a well-rounded
                  perspective across the entire stack.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open source, or reading about
                  system design and distributed systems.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 sm:max-w-sm">
                  <div>
                    <p className="font-display text-3xl font-bold text-foreground">
                      1+
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-foreground">
                      5+
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Projects Built
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              My Journey
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Timeline
            </h2>
          </AnimatedSection>

          <div className="relative mt-14">
            <div className="absolute left-[18px] top-0 h-full w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />

            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.15}
                  className="relative mb-12 last:mb-0"
                >
                  <div
                    className={`flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}
                    >
                      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {item.period}
                        </span>
                        <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
