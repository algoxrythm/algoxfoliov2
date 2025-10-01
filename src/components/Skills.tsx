import { Code, Cpu, Layers, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Cpu,
    title: "Robotics & Automation",
    color: "from-primary to-accent",
    skills: ["ROS2", "CAD & Fusion 360", "FEA", "Automation Systems", "Sensor Integration"],
  },
  {
    icon: Layers,
    title: "AI/ML",
    color: "from-accent to-secondary",
    skills: ["YOLOv8", "TensorFlow", "PyTorch", "EDA", "Neural Networks", "Computer Vision"],
  },
  {
    icon: Code,
    title: "Programming",
    color: "from-secondary to-primary",
    skills: ["Python", "C++", "Data Structures", "Algorithms", "Git", "Linux"],
  },
  {
    icon: Users,
    title: "Leadership",
    color: "from-primary to-secondary",
    skills: ["Project Management", "Team Collaboration", "Mentorship", "Communication"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-primary">Arsenal</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className="relative p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="px-3 py-2 rounded-md bg-muted hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 cursor-default group/skill"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <span className="text-sm text-muted-foreground group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Holographic corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
