import ExperienceItem from "./ExperienceItem";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Visa Inc.",
    role: "Senior Software Engineer",
    period: "2024 - Present",
    achievements: [
      "Building scalable backend services using Java and Spring Boot.",
      "Designed and implemented microservices architecture.",
      "Improved system performance through optimization and caching."
    ]
  },
  {
    company: "BAC Credomatic",
    role: "Software Engineer",
    period: "2021 - 2024",
    achievements: [
      "Developed and maintained core banking applications.",
      "Implemented REST APIs consumed by web and mobile apps.",
      "Collaborated with product teams."
    ]
  }
];

function Experience() {
  return (
    <section className="mt-15 space-y-6">
      <h2 className="text-3xl font-bold">Experience</h2>

      <div className="rounded-2xl">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.company}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;

