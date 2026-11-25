import type { Project } from "./FeaturedProjects";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <article
      className="
        flex
        h-full
        gap-4
        rounded-2xl
        border
        border-stone-200
        bg-white
        p-4
        shadow-sm
        transition
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
        dark:border-zinc-800
        dark:bg-[#252529]
        dark:shadow-none
        dark:hover:border-zinc-700
      "
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="
          h-36
          w-28
          shrink-0
          rounded-xl
          border
          border-stone-200
          object-cover
          dark:border-zinc-700
        "
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-base font-bold leading-snug">{project.title}</h3>

        <p className="mt-1 text-xs font-semibold text-[#3B82F6] dark:text-blue-300">
          {project.technologies.join(", ")}
        </p>

        <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 transition-colors hover:text-[#3B82F6] dark:text-zinc-300 dark:hover:text-blue-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="size-4"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 transition-colors hover:text-[#3B82F6] dark:text-zinc-300 dark:hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
