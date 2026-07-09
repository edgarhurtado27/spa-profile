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
      "Developed REST APIs for an embedded payments platform using Java 17 and Spring Boot.",
"Refactored the application by removing an obsolete legacy data access JAR after the migration to GraphQL, updating impacted modules and unit tests.",
      "Increased unit test coverage to over 85% by implementing comprehensive automated tests across the application.",
    ],
  },
  {
    company: "3Pillar",
    role: "Senior Software Engineer",
    period: "06/2021 - 12/2025",
    achievements: [
      "Built an SFTP client using Apache Commons Net to automate secure bulk imports of patients, vaccines, and inventory data.",
      "Designed a multithreaded batch processing service using Java ExecutorService and Quartz to generate forecasts for over one million patient records.",
      "Maintained and enhanced a mission-critical healthcare platform built with Java 11 and Oracle by delivering production fixes and new business features.",
    ],
  },
  {
    company: "Edge Bound",
    role: "HCL & MERN Developer",
    period: "08/2018 - 06/2021",
    achievements: [
      "Integrated multiple payment gateways, including PayPal, Mercado Pago, and custom client payment providers, into HCL Commerce storefronts.",
      "Designed and developed Node.js microservices to manage order processing and business workflows.",
      "Built an event-driven order fulfillment service using RabbitMQ, retries, and dead-letter queues to ensure reliable integration with client systems.",
      "Implemented an automated pricing solution to support government tax-free sales events, enabling compliant pricing updates across e-commerce storefronts.",
    ],
  },
  {
    company: "Habil MX",
    role: "Java Developer",
    period: "04/2017 - 06/2018",
    achievements: [
      "Modernized the user experience of a legacy life insurance application through UI enhancements.",
      "Developed SOAP web service clients using Apache Axis to integrate with external enterprise systems.",
      "Resolved defects and improved the accuracy of legacy insurance reports.",
    ],
  },
];

function Experience() {
  return (
    <section className="mt-15 space-y-6">
      <h1 className="text-3xl font-bold">Experience</h1>

      <div className="rounded-2xl">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
