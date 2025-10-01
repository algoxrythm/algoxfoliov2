import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

const timelineEvents = [
  {
    icon: GraduationCap,
    title: "Engineering Education",
    subtitle: "B.E. in Robotics & Automation",
    description: "Building foundation in robotics, automation, and intelligent systems",
    color: "from-primary to-accent",
  },
  {
    icon: Briefcase,
    title: "System for Sapiens",
    subtitle: "Internship",
    description: "Hands-on experience with Fusion 360, FEA, and CAD design for real-world applications",
    color: "from-accent to-secondary",
  },
  {
    icon: Code,
    title: "NeuroSpectre Project",
    subtitle: "AI/ML Development",
    description: "Developed PCB defect detection system using YOLOv8 and computer vision techniques",
    color: "from-secondary to-primary",
  },
  {
    icon: Award,
    title: "Achievements & Recognition",
    subtitle: "Ongoing Innovation",
    description: "Continuous learning and contribution to robotics and AI communities",
    color: "from-primary to-secondary",
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Journey <span className="text-primary">Timeline</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16"></div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.title}
                className={`relative mb-12 animate-fade-in ${
                  isEven ? "md:pr-1/2" : "md:pl-1/2"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center gap-4 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
                  {/* Timeline node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center border-4 border-background shadow-[0_0_20px_rgba(0,240,255,0.5)] z-10`}>
                    <Icon className="w-7 h-7 text-background" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-24 md:ml-0 ${isEven ? "md:mr-12" : "md:ml-12"} flex-1`}>
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      <div className="relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
                        <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-2">
                          {event.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>

                        {/* Decorative corner */}
                        <div className={`absolute ${isEven ? "top-0 left-0" : "top-0 right-0"} w-12 h-12 bg-gradient-to-br ${event.color} opacity-10 blur-lg rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
