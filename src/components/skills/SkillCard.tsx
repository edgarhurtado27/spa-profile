import Skills from "./Skills";

interface SkillCardProp {
  skillInfo: Skills;
}

function SkillCard({ skillInfo }: SkillCardProp) {
  return (
    <div className="flex flex-col gap-3">
      {skillInfo.icon}

      <h2 className="text-lg font-semibold">{skillInfo.skill}</h2>

      <p className="mt-3 text-gray-700 dark:text-gray-400 mt-2 text-sm">
        {skillInfo.description}
      </p>
    </div>
  );
}

export default SkillCard;
