import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  { name: "Robotics", description: "ROS2, CAD, FEA, Automation Systems" },
  { name: "AI/ML", description: "YOLOv8, TensorFlow, PyTorch, Neural Networks" },
  { name: "Programming", description: "Python, C++, Data Structures & Algorithms" },
  { name: "Leadership", description: "Project Management, Collaboration, Mentorship" },
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="text-foreground">PRANAV</span>{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            PATIL
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in font-orbitron font-light">
          Engineering the Future Across{" "}
          <span className="text-primary">Robotics</span>,{" "}
          <span className="text-accent">AI</span>, and{" "}
          <span className="text-secondary">Beyond</span>
        </p>

        {/* Floating skill keywords */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer hover:scale-105 animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <h3 className="font-orbitron font-bold text-primary mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="font-orbitron font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-orbitron font-semibold border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/80 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
