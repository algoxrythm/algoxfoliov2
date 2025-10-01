export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 <span className="text-primary font-orbitron font-semibold">Pranav Patil</span> | 
          Designed for the Future
        </p>

        <nav className="flex gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
          >
            Contact
          </button>
        </nav>
      </div>
    </footer>
  );
};
