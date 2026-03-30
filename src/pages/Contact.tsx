import { useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="rohit.verma272727@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">Let's Connect</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:rohit.verma272727@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  rohit.verma272727@gmail.com
                </a>
                <a
                  href="https://github.com/Roh17v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-5 w-5 text-primary" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/r04hitverma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  LinkedIn
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  India
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
