import Experience from "./Experience";

interface Props {
  experience: Experience;
}

function ExperienceItem({ experience }: Props) {
  return (
    <div
      className={`
        grid
        grid-cols-[1fr_2fr_3fr]
        gap-8
      `}
    >
      {/* Timeline */}
      <div className="relative flex justify-center items-center">
        <div className="absolute  h-full w-[2px] bg-blue-500" />

        <div
          className="
            z-10
            mt-2
            h-3
            w-3
            rounded-full
            bg-blue-500
            flex
          "
        />
      </div>

      {/* Company */}
      <div className="space-y-2 py-5">

        <div className="text-sm font-semibold tracking-widest text-[#3B82F6] dark:text-blue-300">
          <p>{experience.role}</p>
          <p>{experience.company}</p>
          <p className="text-gray-500 dark:text-white">{experience.period}</p>
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
