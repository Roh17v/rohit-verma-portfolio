import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Redux",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "REST APIs",
      "GraphQL",
      "Redis",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Linux",
      "CI/CD",
      "Postman",
    ],
  },
  {
    title: "Other",
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Agile",
      "Problem Solving",
    ],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Expertise
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills & Tech Stack
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
