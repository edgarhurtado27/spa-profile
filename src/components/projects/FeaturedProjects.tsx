import ProjectCard from "./ProjectCard";

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Traceflow",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Interactive learning tool that visualizes recursion, DFS, and BFS execution step by step.",
    image: "/images/projects/traceflow.svg",
    githubUrl: "https://github.com/edgarhurtado27/traceflow",
    liveUrl: "https://traceflow-six.vercel.app",
  },
  {
    title: "Custom Inventory API",
    technologies: ["Node.js", "Express", "MongoDB"],
    description:
      "REST API for inventory management with request validation, structured logging, and integration tests.",
    image: "/images/projects/custom-inventory.svg",
    githubUrl: "https://github.com/edgarhurtado27/custom-inventory-be",
  },
  {
    title: "Simplest Mock Server",
    technologies: ["Node.js", "Mocks Server"],
    description:
      "Configuration-driven mock server for prototyping and testing HTTP APIs without a backend.",
    image: "/images/projects/mock-server.svg",
    githubUrl: "https://github.com/edgarhurtado27/simplest-mock-server",
  },
];

function FeaturedProjects() {
  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="mt-15 pb-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="featured-projects-heading" className="text-3xl font-bold">
          Featured Projects
        </h2>

        <a
          href="https://github.com/edgarhurtado27?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] transition-colors hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
