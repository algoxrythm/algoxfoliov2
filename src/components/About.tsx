import { Brain, Rocket, Lightbulb, Sparkles } from "lucide-react";

const aspects = [
  {
    icon: Rocket,
    title: "Engineer",
    description: "Robotics & Automation specialist with expertise in ROS2, CAD, and FEA",
  },
  {
    icon: Brain,
    title: "AI Innovator",
    description: "Building intelligent systems with Machine Vision and Neural Networks",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Tackling complex challenges with creative engineering solutions",
  },
  {
    icon: Sparkles,
    title: "Polymath",
    description: "Continuous learner exploring the intersection of technology and innovation",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12"></div>

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-primary font-semibold">Pranav Patil</span>, a Robotics & Automation Engineer 
            passionate about <span className="text-accent">AI</span>, <span className="text-secondary">Machine Vision</span>, 
            and <span className="text-primary">Intelligent Systems</span>. I thrive at the intersection of hardware and software, 
            building solutions that push the boundaries of what's possible.
          </p>
        </div>

        {/* Timeline-inspired aspect cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <div
                key={aspect.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-2">
                    {aspect.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {aspect.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Polymath Meter Visual */}
        <div className="mt-16 text-center">
          <h3 className="font-orbitron text-2xl font-bold mb-6">
            <span className="text-accent">Polymath</span> Spectrum
          </h3>
          <div className="flex justify-center gap-2 flex-wrap max-w-2xl mx-auto">
            {["Robotics", "AI/ML", "Programming", "Leadership", "Design", "Innovation"].map((skill, i) => (
              <div
                key={skill}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-orbitron text-sm animate-fade-in hover:bg-primary/20 hover:border-primary/60 transition-all cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
