import ExperienceItem from "./ExperienceItem";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "TCS",
    role: "Backend Software Engineer",
    period: "12/2025 - Present",
    achievements: [
      "Building scalable backend services using Java and Spring Boot.",
      "Designed and implemented microservices architecture.",
      "Improved system performance through optimization and caching.",
    ],
  },
  {
    company: "3Pillar Global",
    role: "Senior Software Engineer",
    period: "06/2021 - 12/2025",
    achievements: [
      "Developed and maintained core banking applications.",
      "Implemented REST APIs consumed by web and mobile apps.",
      "Collaborated with product teams.",
    ],
  },
  {
    company: "Edge Bound",
    role: "HCL & MERN developer",
    period: "08/2018 - 06/2021",
    achievements: [
      "Developed and maintained core banking applications.",
      "Implemented REST APIs consumed by web and mobile apps.",
      "Collaborated with product teams.",
    ],
  },
  {
    company: "Habil MX",
    role: "Java developer",
    period: "04/2017 - 06/2018",
    achievements: [
      "Developed and maintained core banking applications.",
      "Implemented REST APIs consumed by web and mobile apps.",
      "Collaborated with product teams.",
    ],
  },
];

function Experience() {
  return (
    <section className="mt-15 space-y-6">
      <h1 className="text-3xl font-bold">Experience</h1>

      <div className="rounded-2xl">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.company}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
