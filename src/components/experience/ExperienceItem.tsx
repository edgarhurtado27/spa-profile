import Experience from "./Experience";

interface Props {
  experience: Experience;
}

function ExperienceItem({ experience }: Props) {
  return (
    <div
      className={`
        grid
        grid-cols-[80px_260px_1fr]
        gap-8
      `}
    >
      {/* Timeline */}
      <div className="relative flex justify-center items-center">
        <div className="absolute  h-full w-[1px] bg-blue-500" />

        <div
          className="
            z-10
            mt-2
            h-4
            w-4
            rounded-full
            bg-blue-500
            flex
          "
        />
      </div>

      {/* Company */}
      <div className="relative flex flex-col space-y-2 py-5 justify-center">
        <div className="text-sm font-semibold tracking-widest text-[#3B82F6] dark:text-blue-300">
          <p>{experience.role}</p>
          <p className="text-slate-500 font-medium text-sm dark:text-white">{experience.company} • {experience.period}</p>
        </div>
      </div>

      {/* Descripción */}
      <div className="p-5">
        <ul className="space-y-3">
          {experience.achievements.map((item) => (
            <li
              key={item}
              className="
                list-disc
text-gray-700 dark:text-gray-400 
text-sm
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
