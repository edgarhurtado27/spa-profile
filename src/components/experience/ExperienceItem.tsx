import Experience from "./Experience";

interface Props {
  experience: Experience;
  isLast: boolean;
}

function ExperienceItem({ experience, isLast }: Props) {
  return (
    <div
      className={`
        grid
        grid-cols-[40px_280px_1fr]
        gap-8
        px-8
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
        <div
          className="
            flex
            h-16
            w-24
            items-center
            justify-center
            rounded-xl
            border
            bg-white
            shadow-sm
          "
        >
          LOGO
        </div>

        <div>
          <h3 className="text-xl font-semibold">{experience.role}</h3>

          <p className="font-medium text-blue-600">{experience.company}</p>

          <p className="text-gray-500">{experience.period}</p>
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
                text-gray-700
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
