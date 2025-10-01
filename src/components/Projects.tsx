import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NeuroSpectre",
    description: "AI-powered PCB defect detection system using YOLOv8 and computer vision for automated quality control",
    tech: ["YOLOv8", "Python", "OpenCV", "TensorFlow"],
    gradient: "from-primary to-accent",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "AIBE",
    description: "AI-Based Inspection Engine for intelligent automated inspection systems with real-time analysis",
    tech: ["Machine Learning", "Computer Vision", "Python", "ROS2"],
    gradient: "from-accent to-secondary",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "BAAST",
    description: "Bluetooth Assisted Autonomous Shopping Trolley with smart navigation and item tracking capabilities",
    tech: ["IoT", "Arduino", "Bluetooth", "Autonomous Navigation"],
    gradient: "from-secondary to-primary",
    links: {
      github: "#",
      demo: "#",
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 animate-glow-pulse`}></div>

              <div className="relative h-full p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Project Icon/Badge */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="font-orbitron font-bold text-background text-xl">
                    {project.title.substring(0, 2)}
                  </span>
                </div>

                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-secondary/30 text-secondary hover:bg-secondary/10"
                    onClick={() => window.open(project.links.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${project.gradient} opacity-5 blur-xl rounded-tl-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
