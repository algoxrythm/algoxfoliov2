import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-primary" },
  { icon: Code, label: "LeetCode", url: "https://leetcode.com", color: "hover:text-accent" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-secondary" },
  { icon: Mail, label: "Email", url: "mailto:contact@example.com", color: "hover:text-primary" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(187 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(187 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-orbitron font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-center md:text-left">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 ${social.color}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-orbitron font-semibold">{social.label}</span>
                  </a>
                );
              })}
            </div>

            <Button
              variant="outline"
              className="mt-8 font-orbitron font-semibold border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/80 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
