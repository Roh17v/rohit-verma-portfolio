import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
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

const web3FormsHCaptchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const Contact = () => {
  const { toast } = useToast();
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const captchaRef = useRef<HCaptcha | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!web3FormsKey) {
      toast({
        title: "Form not configured",
        description:
          "Add your Web3Forms access key to VITE_WEB3FORMS_ACCESS_KEY before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!captchaToken) {
      toast({
        title: "Captcha required",
        description: "Please complete the captcha before sending your message.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const formData = new FormData(formElement);
      formData.set("access_key", web3FormsKey);
      formData.set("subject", "New contact message from Rohit Verma Portfolio");
      formData.set("from_name", "Rohit Verma Portfolio");
      formData.set("replyto", form.email);
      formData.set("h-captcha-response", captchaToken);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.message || data?.body?.message || "Something went wrong. Please try again.",
        );
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
      formElement.reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      toast({
        title: "Unable to send message",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <input type="hidden" name="access_key" value={web3FormsKey ?? ""} />
              <input
                type="hidden"
                name="subject"
                value="New contact message from Rohit Verma Portfolio"
              />
              <input type="hidden" name="from_name" value="Rohit Verma Portfolio" />
              <input type="hidden" name="replyto" value={form.email} />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>
              <div className="overflow-hidden rounded-r-lg rounded-l-sm">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={web3FormsHCaptchaSiteKey}
                  reCaptchaCompat={false}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                  onError={() => {
                    setCaptchaToken("");
                    toast({
                      title: "Captcha error",
                      description: "Captcha could not be verified. Please try again.",
                      variant: "destructive",
                    });
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Please complete the captcha before sending your message.
              </p>
              <Button type="submit" size="lg" className="gap-2" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
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
